import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@adonais-eye/ui';
import { AuthenticationTemplate } from '../components/templates/AuthenticationTemplate';
import { OTPInput } from '../components/molecules/OTPInput';

export const Otp = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleBackspace = (index: number) => {
    // Handled by the OTPInput molecule ref-focus logic, 
    // but can be extended here if needed
  };

  const handleVerifyOtp = async () => {
    const fullCode = code.join('');
    if (fullCode.length !== 5) return;
    
    setIsLoading(true);
    // Simulate Firebase Auth OTP Verification
    setTimeout(() => {
      setIsLoading(false);
      navigate('/set-password');
    }, 1000);
  };

  // Simulated Numeric Keypad input
  const handleKeypadPress = (num: string) => {
    const firstEmptyIndex = code.findIndex(c => c === '');
    if (firstEmptyIndex !== -1) {
      handleOtpChange(firstEmptyIndex, num);
      // We don't have direct access to inputRefs here easily, 
      // but the user is using the on-screen keypad anyway.
    }
  };

  const handleKeypadDelete = () => {
    let lastFilledIndex = -1;
    for (let i = code.length - 1; i >= 0; i--) {
      if (code[i] !== '') {
        lastFilledIndex = i;
        break;
      }
    }
    
    if (lastFilledIndex !== -1) {
      const newCode = [...code];
      newCode[lastFilledIndex] = '';
      setCode(newCode);
    }
  };

  return (
    <AuthenticationTemplate
      title="Phone verification"
      subtitle="Enter your OTP code sent to your registered phone."
    >
      <div className="mb-6">
        <OTPInput 
          code={code} 
          onChange={handleOtpChange} 
          onBackspace={handleBackspace} 
        />
      </div>

      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-3">
          Didn't receive code? <button className="text-brand-blue font-semibold hover:underline">Resend again</button>
        </p>
        <button 
          onClick={() => navigate('/set-password')}
          className="text-[13px] text-gray-400 font-semibold border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
        >
          Skip (Dev Bypass)
        </button>
      </div>

      <div className="mt-auto">
        <Button 
          className="w-full mb-6" 
          size="lg" 
          onClick={handleVerifyOtp} 
          isLoading={isLoading}
          disabled={code.join('').length !== 5}
        >
          Verify
        </Button>

        {/* Custom Keypad for Demo Fidelity (matches mockup) */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-8 px-6 pb-2 bg-gray-50/50 rounded-3xl pt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button 
              key={num} 
              onClick={() => handleKeypadPress(num.toString())}
              className="text-2xl font-semibold text-gray-800 hover:text-brand-blue"
            >
              {num}
            </button>
          ))}
          <div></div>
          <button 
            onClick={() => handleKeypadPress('0')}
            className="text-2xl font-semibold text-gray-800 hover:text-brand-blue"
          >
            0
          </button>
          <button 
            onClick={handleKeypadDelete}
            className="flex justify-center items-center text-gray-600 hover:text-red-500"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
      </div>
    </AuthenticationTemplate>
  );
};

