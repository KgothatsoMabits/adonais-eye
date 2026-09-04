import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CitizenProfile, Role, User } from '@adonais-eye/shared';

interface AuthContextType {
  user: User | null;
  profile: CitizenProfile | null;
  login: (user: User, profile: CitizenProfile) => void;
  logout: () => void;
  updateProfile: (profile: CitizenProfile) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<CitizenProfile | null>(null);

  const login = (newUser: User, newProfile: CitizenProfile) => {
    setUser(newUser);
    setProfile(newProfile);
  };

  const logout = () => {
    setUser(null);
    setProfile(null);
  };

  const updateProfile = (updatedProfile: CitizenProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <AuthContext.Provider value={{ user, profile, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
