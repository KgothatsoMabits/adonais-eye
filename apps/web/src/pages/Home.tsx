import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { EmergencyActionSection } from '../components/organisms/Home/EmergencyActionSection';

export const Home = () => {
  const { profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col relative h-full pt-8 pb-32 w-full max-w-md mx-auto">
      {/* Top Profile Indicator (Matching 'SafeZone Active') */}
      <div className="px-6 flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
          <img src="https://i.pravatar.cc/150?u=adonais" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <span className="text-[#848B9B] font-medium text-[15px]">SafeZone Active</span>
      </div>

      {/* Center SOS Button Area */}
      <EmergencyActionSection />

      {/* Bottom Info Text */}
      <div className="text-center px-6 relative z-10 mt-8">
        <p className="text-[#3A4354] font-medium text-[14px] mb-2">
          Tap in case of immediate personal danger
        </p>
        <p className="text-[#103B66] font-bold text-[13.5px]">
          Our dispatchers are on standby 24/7
        </p>
      </div>
    </div>
  );
};


