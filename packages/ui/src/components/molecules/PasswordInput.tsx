import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Label } from '../atoms/Label';
import { Input, InputProps } from '../atoms/Input';
import { FormError } from '../atoms/FormError';

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
  label: string;
  errorText?: string;
  containerClassName?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, errorText, containerClassName = '', className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={`w-full relative ${containerClassName}`}>
        <Label>{label}</Label>
        <div className="relative">
          <Input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            error={!!errorText}
            className={`pr-12 ${className}`}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <FormError error={errorText} />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
