import React, { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  return (
    <label className={`block text-[14px] font-medium text-gray-700 mb-1.5 ${className}`} {...props}>
      {children}
    </label>
  );
};
