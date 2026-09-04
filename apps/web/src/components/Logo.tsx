import React from 'react';
import { Shield } from 'lucide-react';

export const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 bg-brand-dark rounded-full flex items-center justify-center mb-5 shadow-lg shadow-brand-dark/20 ring-4 ring-brand-light">
      <Shield className="w-11 h-11 text-brand-blue" strokeWidth={1.75} />
    </div>
    <h1 className="text-[32px] font-extrabold text-brand-dark mb-1 tracking-tight">e-SAPS</h1>
    <p className="text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">S.A. Police Services</p>
  </div>
);
