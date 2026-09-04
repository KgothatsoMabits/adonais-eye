import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInput } from '@adonais-eye/ui';
import { AuthenticationTemplate } from '../components/templates/AuthenticationTemplate';
import { useAuth } from '../context/AuthContext';

export const SetPassword = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);
    // Simulate auth registration API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Auto-login the user to pass the ProtectedRoute guard
      login(
        { id: '1', role: 'CITIZEN' },
        { 
          userId: '1', 
          fullName: 'Sipho Nkosi', 
          phone: '+27821234567',
          phoneVerified: true,
          identityVerificationStatus: 'PENDING',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      );
      
      navigate('/profile/personal-details', { state: { isNewUser: true } });
    }, 1000);
  };

  return (
    <AuthenticationTemplate
      title="Set password"
      subtitle="Choose a strong password to safeguard your records."
    >
      <form onSubmit={handleRegister} className="flex flex-col gap-4 flex-1">
        <PasswordInput
          label="Enter Your Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <PasswordInput
          label="Confirm Password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorText={error}
          required
        />

        <p className="text-xs text-gray-400 pl-1 -mt-2">At least 1 number or a special character</p>

        <div className="mt-6 mt-auto">
          <Button type="submit" size="lg" className="w-full mb-6" isLoading={isLoading}>
            Register
          </Button>
        </div>
      </form>
    </AuthenticationTemplate>
  );
};

