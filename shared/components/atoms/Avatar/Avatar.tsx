import React from 'react';
import clsx from 'clsx';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

const Avatar = ({ className, size = 'md', ...props }: AvatarProps) => {
  return (
    <img
      className={clsx(
        'rounded-full object-cover border border-gray-200',
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
};

export default Avatar;
