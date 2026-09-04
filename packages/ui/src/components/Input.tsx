import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-[14px] font-medium text-gray-700 mb-1.5">{label}</label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-gray-50/50 border rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white transition-all outline-none text-[16px] text-brand-dark placeholder:text-gray-400 ${
            error ? 'border-red-500 focus:ring-red-500/15 focus:border-red-500' : 'border-gray-200 hover:border-gray-300'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-2 text-[13px] font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
