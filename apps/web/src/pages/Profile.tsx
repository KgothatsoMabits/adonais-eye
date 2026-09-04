import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, Info, Briefcase, MapPin, Phone, Mail, LogOut, ChevronRight, ShieldCheck, Star } from 'lucide-react';

export const Profile = () => {
  const { profile } = useAuth();

  const MenuItem = ({ icon: Icon, title, subtitle, isNew }: { icon: any, title: string, subtitle?: string, isNew?: boolean }) => (
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

  return (
    <div className="flex-1 flex flex-col bg-white h-full pb-32 overflow-y-auto custom-scrollbar w-full max-w-md mx-auto">
      
      {/* Header Section */}
      <div className="px-5 pt-8 pb-6 flex items-start justify-between">
        <div className="flex flex-col">
          <h1 className="text-[34px] font-bold text-brand-dark leading-tight tracking-tight mb-2">
            {profile?.fullName || 'Sipho Nkosi'}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
              <Star className="w-3.5 h-3.5 text-brand-dark fill-brand-dark" />
              <span className="text-[13px] font-bold text-brand-dark tracking-tight">4.78</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[13px] font-bold text-brand-dark tracking-tight">Verified</span>
            </div>
          </div>
        </div>

        <button className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
          <User className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
        </button>
      </div>

      <div className="h-2 w-full bg-gray-50"></div>

      {/* List Section */}
      <div className="flex flex-col px-5 py-2">
        <MenuItem 
          icon={User} 
          title="Personal Details" 
          subtitle="Manage your identity information" 
        />
        <MenuItem 
          icon={Settings} 
          title="Settings" 
        />
        <MenuItem 
          icon={MapPin} 
          title="Addresses" 
          subtitle="Manage your residential details"
          isNew={true}
        />
        <MenuItem 
          icon={Phone} 
          title="Emergency Contacts" 
          subtitle="Manage who we alert"
        />
        <MenuItem 
          icon={Briefcase} 
          title="Business Profile" 
          subtitle="Automate work security expenses"
        />
      </div>
      
      <div className="h-2 w-full bg-gray-50 my-2"></div>

      <div className="flex flex-col px-5 py-2">
        <MenuItem 
          icon={Mail} 
          title="Support & Feedback" 
        />
        <MenuItem 
          icon={Info} 
          title="About e-SAPS" 
        />
        <div className="mt-4 pb-4">
          <button className="w-full flex items-center py-4 text-red-600 hover:bg-red-50 transition-colors rounded-xl px-4 -ml-4">
            <LogOut className="w-[22px] h-[22px] mr-4" strokeWidth={1.5} />
            <span className="text-[16px] font-medium">Sign Out</span>
          </button>
        </div>
      </div>

    </div>
  );
};
