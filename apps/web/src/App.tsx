import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MainLayout } from './layouts/MainLayout';
import { Onboarding } from './pages/Onboarding';
import { Welcome } from './pages/Welcome';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Otp } from './pages/Otp';
import { SetPassword } from './pages/SetPassword';
import { Profile } from './pages/Profile';
import { PersonalDetails } from './pages/PersonalDetails';
import { Home } from './pages/Home';

// Simple guard to protect authenticated routes
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/gateway" replace />;
  }
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Onboarding Flow */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/gateway" element={<Welcome />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal-details" element={<PersonalDetails />} />
        
        {/* Protected Area */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
