import React from 'react';
import { User, Star, ShieldCheck } from 'lucide-react';
import { CitizenProfile } from '@adonais-eye/shared';

interface ProfileHeaderProps {
  profile: CitizenProfile | null;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
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
  );
};
