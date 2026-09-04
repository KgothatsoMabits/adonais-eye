import React, { useRef } from 'react';

interface OTPInputProps {
  code: string[];
  onChange: (index: number, value: string) => void;
  onBackspace: (index: number) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ code, onChange, onBackspace }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 1) {
      value = value.slice(value.length - 1);
    }
    if (!/^\d*$/.test(value)) return;
    onChange(index, value);
    
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      onBackspace(index);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-14 text-center text-2xl font-semibold border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors bg-white shadow-sm"
        />
      ))}
    </div>
  );
};
