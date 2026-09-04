import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, Info, Briefcase, MapPin, Phone, Mail, LogOut } from 'lucide-react';
import { ProfileHeader } from '../components/organisms/Profile/ProfileHeader';
import { ProfileMenuItem } from '../components/molecules/ProfileMenuItem';

export const Profile = () => {
  const { profile } = useAuth();

  return (
    <div className="flex-1 flex flex-col bg-white h-full pb-32 overflow-y-auto custom-scrollbar w-full max-w-md mx-auto">
      
      <ProfileHeader profile={profile} />

      <div className="h-2 w-full bg-gray-50"></div>

      {/* List Section */}
      <div className="flex flex-col px-5 py-2">
        <ProfileMenuItem 
          icon={User} 
          title="Personal Details" 
          subtitle="Manage your identity information" 
        />
        <ProfileMenuItem 
          icon={Settings} 
          title="Settings" 
        />
        <ProfileMenuItem 
          icon={MapPin} 
          title="Addresses" 
          subtitle="Manage your residential details"
          isNew={true}
        />
        <ProfileMenuItem 
          icon={Phone} 
          title="Emergency Contacts" 
          subtitle="Manage who we alert"
        />
        <ProfileMenuItem 
          icon={Briefcase} 
          title="Business Profile" 
          subtitle="Automate work security expenses"
        />
      </div>
      
      <div className="h-2 w-full bg-gray-50 my-2"></div>

      <div className="flex flex-col px-5 py-2">
        <ProfileMenuItem 
          icon={Mail} 
          title="Support & Feedback" 
        />
        <ProfileMenuItem 
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

