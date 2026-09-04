import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Upload } from 'lucide-react';
export const DocumentUpload = ({ label, subtitle, onUpload }) => {
    return (_jsxs("button", { type: "button", onClick: onUpload, className: "w-full border-2 border-dashed border-brand-blue/30 rounded-xl p-6 flex flex-col items-center justify-center bg-[#F8FAFC] hover:bg-brand-light/50 hover:border-brand-blue/50 transition-colors", children: [_jsx(Upload, { className: "w-6 h-6 text-brand-blue mb-3" }), _jsx("span", { className: "text-[15px] font-semibold text-brand-dark mb-1 text-center", children: label }), _jsx("span", { className: "text-[13px] text-gray-500 text-center", children: subtitle })] }));
};
