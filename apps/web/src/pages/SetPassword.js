import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
            navigate('/profile/personal-details', { state: { isNewUser: true } });
        }, 1000);
    };
    return (_jsx(AuthenticationTemplate, { title: "Set password", subtitle: "Choose a strong password to safeguard your records.", children: _jsxs("form", { onSubmit: handleRegister, className: "flex flex-col gap-4 flex-1", children: [_jsx(PasswordInput, { label: "Enter Your Password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx(PasswordInput, { label: "Confirm Password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), errorText: error, required: true }), _jsx("p", { className: "text-xs text-gray-400 pl-1 -mt-2", children: "At least 1 number or a special character" }), _jsx("div", { className: "mt-6 mt-auto", children: _jsx(Button, { type: "submit", size: "lg", className: "w-full mb-6", isLoading: isLoading, children: "Register" }) })] }) }));
};
