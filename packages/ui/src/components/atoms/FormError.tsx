import React from 'react';

export interface FormErrorProps {
  error?: string;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ error, className = '' }) => {
  if (!error) return null;
  return (
    <p className={`mt-2 text-[13px] font-medium text-red-500 ${className}`}>
      {error}
    </p>
  );
};
