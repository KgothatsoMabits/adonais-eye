import React, { forwardRef } from 'react';
import { Label } from '../atoms/Label';
import { Input, InputProps } from '../atoms/Input';
import { FormError } from '../atoms/FormError';

export interface FormFieldProps extends InputProps {
  label: string;
  errorText?: string;
  containerClassName?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errorText, containerClassName = '', className = '', ...props }, ref) => {
    return (
      <div className={`w-full ${containerClassName}`}>
        <Label>{label}</Label>
        <Input ref={ref} error={!!errorText} className={className} {...props} />
        <FormError error={errorText} />
      </div>
    );
  }
);

FormField.displayName = 'FormField';
