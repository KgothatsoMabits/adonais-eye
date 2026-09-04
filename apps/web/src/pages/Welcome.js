import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Button } from '@adonais-eye/ui';
import { Logo } from '../components/Logo';
export const Welcome = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "flex-1 flex flex-col items-start justify-center bg-transparent px-6 py-6 h-full w-full max-w-md mx-auto", children: [_jsx("div", { className: "mb-8 mt-10", children: _jsx(Logo, {}) }), _jsxs("div", { className: "mb-10 w-full px-2", children: [_jsx("h2", { className: "text-[34px] font-bold text-brand-dark leading-tight tracking-tight mb-3", children: "Welcome to e-SAPS" }), _jsx("p", { className: "text-gray-500 text-[16px] leading-relaxed", children: "Your secure digital connection to the South African Police Services. Fast, safe, and accountable." })] }), _jsxs("div", { className: "w-full flex flex-col gap-3 mt-auto mb-6", children: [_jsx(Button, { size: "lg", className: "w-full shadow-lg shadow-brand-blue/20", onClick: () => navigate('/register'), children: "Create an Account" }), _jsx(Button, { size: "lg", variant: "secondary", className: "w-full text-brand-dark hover:bg-gray-50", onClick: () => navigate('/login'), children: "Log In" })] })] }));
};
