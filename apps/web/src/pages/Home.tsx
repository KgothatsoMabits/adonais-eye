import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, Upload, CheckCircle2, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input } from '@adonais-eye/ui';

export const Home = () => {
  const { profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    street: '',
    suburb: '',
    city: '',
    code: ''
  });

  useEffect(() => {
    // Check if the user was just redirected from registration
    if (location.state?.isNewUser) {
      setShowVerificationModal(true);
      // Clear the state so it doesn't pop up again on refresh
      navigate('.', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleSubmitVerification = () => {
    setIsSubmitting(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto-close success modal after a delay
      setTimeout(() => {
        setShowVerificationModal(false);
        setIsSuccess(false);
      }, 4000);
    }, 2000);
  };

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

      {/* Bottom Info Text */}
      <div className="text-center px-6 relative z-10 mt-8">
        <p className="text-[#3A4354] font-medium text-[14px] mb-2">
          Tap in case of immediate personal danger
        </p>
        <p className="text-[#103B66] font-bold text-[13.5px]">
          Our dispatchers are on standby 24/7
        </p>
      </div>

      {/* Verification Modal Overlay */}
      {showVerificationModal && (
        <div className="absolute inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4 rounded-[40px] overflow-hidden animate-fade-in">
          <div className="bg-white w-full sm:max-w-sm rounded-t-[32px] sm:rounded-[32px] p-6 pb-12 sm:pb-6 shadow-2xl flex flex-col animate-modal-up max-h-[90%] overflow-y-auto custom-scrollbar">
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-[22px] font-bold text-brand-dark mb-3 tracking-tight">Verification in Progress</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Your documents have been securely submitted. You will be notified via SMS as soon as our team has verified your identity.
                </p>
                <Button 
                  className="w-full mt-8" 
                  onClick={() => {
                    setShowVerificationModal(false);
                    setIsSuccess(false);
                  }}
                >
                  Continue to App
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[24px] font-bold text-brand-dark tracking-tight">Verify Identity</h3>
                  <button onClick={() => setShowVerificationModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-500 text-[15px] mb-5 leading-relaxed">Submit your documents to activate full emergency dispatch capabilities.</p>

                <div className="flex flex-col gap-3 mb-6">
                  <button className="flex items-center p-3 border border-gray-200 rounded-xl bg-white hover:border-brand-blue/50 hover:shadow-sm transition-all group text-left">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-blue/10 transition-colors">
                      <Upload className="w-4 h-4 text-gray-600 group-hover:text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-brand-dark font-medium text-[15px] mb-0.5">SA ID Document</span>
                      <span className="block text-gray-400 text-[13px]">PDF, JPG, or PNG max 5MB</span>
                    </div>
                  </button>

                  <button className="flex items-center p-3 border border-gray-200 rounded-xl bg-white hover:border-brand-blue/50 hover:shadow-sm transition-all group text-left">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-blue/10 transition-colors">
                      <Upload className="w-4 h-4 text-gray-600 group-hover:text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-brand-dark font-medium text-[15px] mb-0.5">Proof of Address</span>
                      <span className="block text-gray-400 text-[13px]">PDF, JPG, or PNG max 5MB</span>
                    </div>
                  </button>
                </div>

                <div className="flex flex-col gap-3.5 mb-6">
                  <h4 className="text-[14px] font-medium text-gray-700 -mb-1">Residential Details</h4>
                  <Input
                    label="Street"
                    placeholder="e.g. 124 Commission St"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  />
                  <Input
                    label="Suburb"
                    placeholder="e.g. Braamfontein"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                  />
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        label="City"
                        placeholder="e.g. Johannesburg"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="w-1/3">
                      <Input
                        label="Code"
                        placeholder="e.g. 2000"
                        value={formData.code}
                        onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full text-[15px]" 
                  size="lg" 
                  onClick={handleSubmitVerification}
                  isLoading={isSubmitting}
                >
                  Submit Documents
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
