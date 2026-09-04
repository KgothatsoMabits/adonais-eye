import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  isNew?: boolean;
}

export const ProfileMenuItem: React.FC<MenuItemProps> = ({ icon: Icon, title, subtitle, isNew }) => (
  <button className="w-full flex items-center justify-between py-4 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100">
    <div className="flex items-center gap-4">
      <Icon className="w-[22px] h-[22px] text-gray-800" strokeWidth={1.5} />
      <div className="flex flex-col items-start text-left">
        <span className="text-[16px] font-medium text-brand-dark">{title}</span>
        {subtitle && <span className="text-[14px] text-gray-500 mt-0.5">{subtitle}</span>}
      </div>
    </div>
    {isNew && (
      <span className="bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
        New
      </span>
    )}
  </button>
);
