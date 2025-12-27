import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

const variantStyles = {
  primary: 'bg-sky-100 text-sky-700',
  secondary: 'bg-gray-200 text-gray-700',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  error: 'bg-red-100 text-red-700',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full';
    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];

    const classes = [baseStyles, variantClass, sizeClass, className]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
