import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { Button, Input } from '@adonais-eye/ui';
import { useAuth } from '../context/AuthContext';
export const SetPassword = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const handleRegister = (e) => {
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
            login({ id: '1', role: 'CITIZEN' }, {
                userId: '1',
                fullName: 'Sipho Nkosi',
                phone: '+27821234567',
                phoneVerified: true,
                identityVerificationStatus: 'PENDING',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
            navigate('/home', { state: { isNewUser: true } });
        }, 1000);
    };
    return (_jsxs("div", { className: "flex-1 flex flex-col bg-transparent px-6 py-6 h-full overflow-y-auto custom-scrollbar w-full max-w-md mx-auto", children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex items-center text-brand-dark font-medium mb-4 mt-2 w-fit hover:opacity-80", children: [_jsx(ChevronLeft, { className: "w-5 h-5 mr-1" }), "Back"] }), _jsxs("div", { className: "mb-6 px-1", children: [_jsx("h1", { className: "text-[34px] font-bold text-brand-dark mb-1.5 leading-tight tracking-tight", children: "Set password" }), _jsx("p", { className: "text-gray-500 text-[16px]", children: "Choose a strong password to safeguard your records." })] }), _jsxs("form", { onSubmit: handleRegister, className: "flex flex-col gap-4 flex-1", children: [_jsxs("div", { className: "relative", children: [_jsx(Input, { label: "Enter Your Password", type: showPassword ? 'text' : 'password', placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-4 top-[44px] text-gray-400 hover:text-gray-600 focus:outline-none", children: showPassword ? _jsx(EyeOff, { className: "w-5 h-5" }) : _jsx(Eye, { className: "w-5 h-5" }) })] }), _jsxs("div", { className: "relative", children: [_jsx(Input, { label: "Confirm Password", type: showConfirmPassword ? 'text' : 'password', placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), error: error, required: true }), _jsx("button", { type: "button", onClick: () => setShowConfirmPassword(!showConfirmPassword), className: "absolute right-4 top-[44px] text-gray-400 hover:text-gray-600 focus:outline-none", children: showConfirmPassword ? _jsx(EyeOff, { className: "w-5 h-5" }) : _jsx(Eye, { className: "w-5 h-5" }) })] }), _jsx("p", { className: "text-xs text-gray-400 pl-1 -mt-2", children: "At least 1 number or a special character" }), _jsx("div", { className: "mt-6 mt-auto", children: _jsx(Button, { type: "submit", size: "lg", className: "w-full mb-6", isLoading: isLoading, children: "Register" }) })] })] }));
};
