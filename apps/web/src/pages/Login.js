import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormField, PasswordInput } from '@adonais-eye/ui';
import { AuthenticationTemplate } from '../components/templates/AuthenticationTemplate';
import { useAuth } from '../context/AuthContext';
import { isValidEmail, isValidSAID } from '../utils/validation';
export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginMethod, setLoginMethod] = useState('email');
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        if (loginMethod === 'email' && !isValidEmail(formData.identifier)) {
            setError('Please enter a valid email address');
            return;
        }
        if (loginMethod === 'id' && !isValidSAID(formData.identifier)) {
            setError('Please enter a valid 13-digit SA ID number');
            return;
        }
        if (!formData.password)
            return;
        setIsLoading(true);
        // Simulate auth API call
        setTimeout(() => {
            const fakeUserId = crypto.randomUUID();
            const mockProfile = {
                userId: fakeUserId,
                fullName: 'Sipho Nkosi', // Mocked user
                phone: '+27821234567',
                phoneVerified: true,
                identityVerificationStatus: 'VERIFIED',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            login({ id: fakeUserId, role: 'CITIZEN' }, mockProfile);
            navigate('/home');
        }, 1200);
    };
    return (_jsxs(AuthenticationTemplate, { title: "Welcome back", subtitle: "Log in to your e-SAPS account to continue.", children: [_jsxs("form", { onSubmit: handleLogin, className: "flex flex-col gap-4 flex-1", children: [_jsxs("div", { className: "flex p-1 bg-gray-100 rounded-xl mb-2", children: [_jsx("button", { type: "button", className: `flex-1 py-3 text-[14px] font-semibold rounded-lg transition-all ${loginMethod === 'email'
                                    ? 'bg-white shadow-sm text-brand-dark'
                                    : 'text-gray-500 hover:text-brand-dark hover:bg-gray-200/50'}`, onClick: () => {
                                    setLoginMethod('email');
                                    setError('');
                                    setFormData({ ...formData, identifier: '' });
                                }, children: "Email" }), _jsx("button", { type: "button", className: `flex-1 py-3 text-[14px] font-semibold rounded-lg transition-all ${loginMethod === 'id'
                                    ? 'bg-white shadow-sm text-brand-dark'
                                    : 'text-gray-500 hover:text-brand-dark hover:bg-gray-200/50'}`, onClick: () => {
                                    setLoginMethod('id');
                                    setError('');
                                    setFormData({ ...formData, identifier: '' });
                                }, children: "SA ID Number" })] }), _jsx(FormField, { label: loginMethod === 'email' ? 'Email Address' : 'SA ID Number (13 digits)', type: loginMethod === 'email' ? 'email' : 'text', placeholder: loginMethod === 'email' ? 'e.g. sipho.nkosi@gmail.com' : 'e.g. 9402145890081', value: formData.identifier, onChange: (e) => setFormData({
                            ...formData,
                            identifier: loginMethod === 'id' ? e.target.value.replace(/\D/g, '').slice(0, 13) : e.target.value
                        }), errorText: error, required: true }), _jsx(PasswordInput, { label: "Password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true }), _jsx("div", { className: "flex justify-end -mt-1", children: _jsx("button", { type: "button", className: "text-[13px] text-brand-blue font-semibold hover:underline", children: "Forgot password?" }) }), _jsxs("div", { className: "mt-4 flex flex-col gap-3", children: [_jsx(Button, { type: "submit", size: "lg", className: "w-full", isLoading: isLoading, children: "Log In" }), _jsxs("div", { className: "relative flex items-center py-1.5", children: [_jsx("div", { className: "flex-grow border-t border-gray-200" }), _jsx("span", { className: "flex-shrink-0 mx-4 text-gray-400 text-sm", children: "or" }), _jsx("div", { className: "flex-grow border-t border-gray-200" })] }), _jsxs(Button, { type: "button", variant: "secondary", size: "lg", className: "w-full font-medium", children: [_jsxs("svg", { className: "w-5 h-5 mr-3", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }), _jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }), _jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }), _jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })] }), "Log in with Google"] })] })] }), _jsxs("div", { className: "mt-auto text-center pb-4 flex flex-col items-center gap-4", children: [_jsxs("p", { className: "text-sm text-gray-500", children: ["Don't have an account?", ' ', _jsx("button", { type: "button", onClick: () => navigate('/register'), className: "text-brand-blue font-semibold hover:underline", children: "Sign up" })] }), _jsx("button", { type: "button", onClick: () => {
                            login({ id: '1', role: 'CITIZEN' }, {
                                userId: '1',
                                fullName: 'Sipho Nkosi',
                                phone: '+27821234567',
                                phoneVerified: true,
                                identityVerificationStatus: 'PENDING',
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            });
                            navigate('/home');
                        }, className: "text-[13px] text-gray-400 font-semibold border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors w-fit mx-auto", children: "Skip (Dev Bypass)" })] })] }));
};
