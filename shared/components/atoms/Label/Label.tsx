import React from 'react';
import clsx from 'clsx';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = ({ children, className, required = false, ...props }: LabelProps) => {
  return (
    <label
      className={clsx(
        'text-sm font-medium text-gray-700',
        required && 'after:content-["*"] after:ml-0.5 after:text-red-500',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
