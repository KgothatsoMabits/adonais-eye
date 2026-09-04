import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-brand-blue hover:bg-blue-700 text-white shadow-[0_4px_12px_rgba(21,112,239,0.25)] focus:ring-brand-blue/50",
  secondary: "bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 shadow-sm focus:ring-gray-100",
  danger: "bg-red-600 hover:bg-red-700 text-white shadow-[0_4px_12px_rgba(220,38,38,0.25)] focus:ring-red-600/50",
  ghost: "bg-transparent hover:bg-gray-50 text-gray-600 focus:ring-gray-100"
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[14px]",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-[16px] font-medium"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading, className = '', disabled, ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 active:scale-[0.98]";
    
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : children}
      </button>
    );
  }
);
Button.displayName = 'Button';
