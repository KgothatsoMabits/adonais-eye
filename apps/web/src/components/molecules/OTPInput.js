import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
export const OTPInput = ({ code, onChange, onBackspace }) => {
    const inputRefs = useRef([]);
    const handleChange = (index, e) => {
        let value = e.target.value;
        if (value.length > 1) {
            value = value.slice(value.length - 1);
        }
        if (!/^\d*$/.test(value))
            return;
        onChange(index, value);
        if (value && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            onBackspace(index);
            inputRefs.current[index - 1]?.focus();
        }
    };
    return (_jsx("div", { className: "flex justify-center gap-3", children: code.map((digit, index) => (_jsx("input", { ref: (el) => (inputRefs.current[index] = el), type: "text", inputMode: "numeric", pattern: "\\d*", maxLength: 1, value: digit, onChange: (e) => handleChange(index, e), onKeyDown: (e) => handleKeyDown(index, e), className: "w-14 h-14 text-center text-2xl font-semibold border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors bg-white shadow-sm" }, index))) }));
};
