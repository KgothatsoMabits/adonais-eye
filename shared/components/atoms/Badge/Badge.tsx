import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const variantMap = {
  default: 'bg-gray-200 text-gray-800',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
};

const Badge = ({ children, className, variant = 'default', ...props }: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium',
        variantMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
