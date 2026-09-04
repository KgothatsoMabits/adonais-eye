import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@adonais-eye/ui';
import { Logo } from '../components/Logo';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-start justify-center bg-transparent px-6 py-6 h-full w-full max-w-md mx-auto">
      <div className="mb-8 mt-10">
        <Logo />
      </div>

      <div className="mb-10 w-full px-2">
        <h2 className="text-[34px] font-bold text-brand-dark leading-tight tracking-tight mb-3">Welcome to e-SAPS</h2>
        <p className="text-gray-500 text-[16px] leading-relaxed">
          Your secure digital connection to the South African Police Services. Fast, safe, and accountable.
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 mt-auto mb-6">
        <Button size="lg" className="w-full shadow-lg shadow-brand-blue/20" onClick={() => navigate('/register')}>
          Create an Account
        </Button>
        <Button size="lg" variant="secondary" className="w-full text-brand-dark hover:bg-gray-50" onClick={() => navigate('/login')}>
          Log In
        </Button>
      </div>
    </div>
  );
};
