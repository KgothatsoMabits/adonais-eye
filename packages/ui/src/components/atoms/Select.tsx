import React, { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full px-4 py-3 bg-gray-50/50 border rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white transition-all outline-none text-[16px] text-brand-dark appearance-none ${
          error ? 'border-red-500 focus:ring-red-500/15 focus:border-red-500' : 'border-gray-200 hover:border-gray-300'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
