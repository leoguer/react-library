import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
  success: 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700',
  warning: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
  error: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
  ghost: 'bg-transparent text-sky-500 hover:bg-sky-50 active:bg-sky-100 border border-sky-200',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-base focus-ring disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];
    const widthClass = fullWidth ? 'w-full' : '';
    const loadingClass = loading ? 'opacity-75' : '';

    const classes = [
      baseStyles,
      variantClass,
      sizeClass,
      widthClass,
      loadingClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="w-4 h-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
