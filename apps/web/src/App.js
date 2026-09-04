import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return _jsx(Navigate, { to: "/gateway", replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
const AppRoutes = () => {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Onboarding, {}) }), _jsx(Route, { path: "/gateway", element: _jsx(Welcome, {}) }), _jsx(Route, { path: "/register", element: _jsx(Registration, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/otp", element: _jsx(Otp, {}) }), _jsx(Route, { path: "/set-password", element: _jsx(SetPassword, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/profile/personal-details", element: _jsx(PersonalDetails, {}) }), _jsx(Route, { path: "/home", element: _jsx(ProtectedRoute, { children: _jsx(Home, {}) }) })] }) }));
};
export default function App() {
    return (_jsx(AuthProvider, { children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
}
