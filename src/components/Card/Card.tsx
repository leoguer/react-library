import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

const variantStyles = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-transparent border-2 border-gray-300',
  elevated: 'bg-white shadow-lg',
};

const paddingStyles = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hoverable = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-lg transition-all duration-base';
    const variantClass = variantStyles[variant];
    const paddingClass = paddingStyles[padding];
    const hoverClass = hoverable ? 'hover:shadow-md hover:border-gray-300 cursor-pointer' : '';

    const classes = [
      baseStyles,
      variantClass,
      paddingClass,
      hoverClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
