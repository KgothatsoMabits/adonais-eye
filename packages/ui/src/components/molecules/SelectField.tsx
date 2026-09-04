import React, { forwardRef } from 'react';
import { Label } from '../atoms/Label';
import { Select, SelectProps } from '../atoms/Select';
import { FormError } from '../atoms/FormError';
import { ChevronDown } from 'lucide-react';

export interface SelectFieldProps extends SelectProps {
  label: string;
  errorText?: string;
  containerClassName?: string;
  options: { label: string; value: string }[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, errorText, containerClassName = '', className = '', options, ...props }, ref) => {
    return (
      <div className={`w-full relative ${containerClassName}`}>
        {label && <Label>{label}</Label>}
        <div className="relative">
          <Select ref={ref} error={!!errorText} className={`pr-10 ${className}`} {...props}>
            <option value="" disabled hidden>
              Select {label}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        <FormError error={errorText} />
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';
