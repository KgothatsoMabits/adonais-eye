import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const EmergencyActionSection = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative w-full mt-4">
      {/* Elliptical Concentric Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Innermost ring */}
        <div className="absolute w-[200px] h-[260px] rounded-[100%] border border-brand-coral/20" />
        {/* Middle ring */}
        <div className="absolute w-[260px] h-[340px] rounded-[100%] border border-brand-coral/15" />
        {/* Outer ring */}
        <div className="absolute w-[320px] h-[420px] rounded-[100%] border border-brand-coral/5" />
      </div>

      {/* Main SOS Button */}
      <button className="relative z-10 w-44 h-44 bg-brand-coral rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_60px_rgba(255,71,90,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group">
        {/* Subtle pulse animation behind the button */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-coral/50 animate-slow-ping group-hover:hidden" />
        
        <ShieldAlert className="w-9 h-9 mb-2" strokeWidth={1.5} />
        <span className="text-[14px] font-extrabold tracking-wider text-center leading-[1.2]">
          REQUEST<br/>ASSISTANCE
        </span>
      </button>
    </div>
  );
};
