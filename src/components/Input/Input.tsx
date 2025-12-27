import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'px-3 py-2 border border-gray-300 rounded-lg text-base transition-colors duration-base focus-ring placeholder-gray-400';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'hover:border-gray-400';
    const widthClass = fullWidth ? 'w-full' : '';

    const classes = [baseStyles, errorStyles, widthClass, className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input ref={ref} className={classes} {...props} />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-gray-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
