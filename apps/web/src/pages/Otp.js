import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@adonais-eye/ui';
export const Otp = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);
    const handleChange = (index, value) => {
        if (value.length > 1) {
            value = value.slice(value.length - 1);
        }
        if (!/^\d*$/.test(value))
            return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        // Auto-advance
        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handleVerifyOtp = async () => {
        const fullCode = code.join('');
        if (fullCode.length !== 5)
            return;
        setIsLoading(true);
        // Simulate Firebase Auth OTP Verification
        setTimeout(() => {
            setIsLoading(false);
            navigate('/set-password');
        }, 1000);
    };
    // Simulated Numeric Keypad input
    const handleKeypadPress = (num) => {
        const firstEmptyIndex = code.findIndex(c => c === '');
        if (firstEmptyIndex !== -1) {
            handleChange(firstEmptyIndex, num);
        }
    };
    const handleKeypadDelete = () => {
        let lastFilledIndex = -1;
        for (let i = code.length - 1; i >= 0; i--) {
            if (code[i] !== '') {
                lastFilledIndex = i;
                break;
            }
        }
        if (lastFilledIndex !== -1) {
            const newCode = [...code];
            newCode[lastFilledIndex] = '';
            setCode(newCode);
            inputRefs.current[lastFilledIndex]?.focus();
        }
    };
    return (_jsxs("div", { className: "flex-1 flex flex-col bg-transparent px-6 py-6 h-full overflow-y-auto custom-scrollbar w-full max-w-md mx-auto", children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex items-center text-brand-dark font-medium mb-4 mt-2 w-fit hover:opacity-80", children: [_jsx(ChevronLeft, { className: "w-5 h-5 mr-1" }), "Back"] }), _jsxs("div", { className: "mb-6 px-1", children: [_jsx("h1", { className: "text-[34px] font-bold text-brand-dark mb-1.5 leading-tight tracking-tight", children: "Phone verification" }), _jsx("p", { className: "text-gray-500 text-[16px]", children: "Enter your OTP code sent to your registered phone." })] }), _jsx("div", { className: "flex justify-center gap-3 mb-6", children: code.map((digit, index) => (_jsx("input", { ref: (el) => (inputRefs.current[index] = el), type: "text", inputMode: "numeric", pattern: "\\d*", maxLength: 1, value: digit, onChange: (e) => handleChange(index, e.target.value), onKeyDown: (e) => handleKeyDown(index, e), className: "w-14 h-14 text-center text-2xl font-semibold border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors" }, index))) }), _jsxs("div", { className: "text-center mb-6", children: [_jsxs("p", { className: "text-sm text-gray-500 mb-3", children: ["Didn't receive code? ", _jsx("button", { className: "text-brand-blue font-semibold hover:underline", children: "Resend again" })] }), _jsx("button", { onClick: () => navigate('/set-password'), className: "text-[13px] text-gray-400 font-semibold border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors", children: "Skip (Dev Bypass)" })] }), _jsxs("div", { className: "mt-auto", children: [_jsx(Button, { className: "w-full mb-6", size: "lg", onClick: handleVerifyOtp, isLoading: isLoading, disabled: code.join('').length !== 5, children: "Verify" }), _jsxs("div", { className: "grid grid-cols-3 gap-y-4 gap-x-8 px-6 pb-2 bg-gray-50/50 rounded-3xl pt-6", children: [[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (_jsx("button", { onClick: () => handleKeypadPress(num.toString()), className: "text-2xl font-semibold text-gray-800 hover:text-brand-blue", children: num }, num))), _jsx("div", {}), _jsx("button", { onClick: () => handleKeypadPress('0'), className: "text-2xl font-semibold text-gray-800 hover:text-brand-blue", children: "0" }), _jsx("button", { onClick: handleKeypadDelete, className: "flex justify-center items-center text-gray-600 hover:text-red-500", children: _jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" }) }) })] })] })] }));
};
