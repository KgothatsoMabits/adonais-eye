import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const AuthenticationTemplate = ({ children, showBackButton = true, onBack, title, subtitle, }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        if (onBack) {
            onBack();
        }
        else {
            navigate(-1);
        }
    };
    return (_jsxs("div", { className: "flex-1 flex flex-col bg-transparent px-6 py-6 h-full overflow-y-auto custom-scrollbar w-full max-w-md mx-auto", children: [showBackButton && (_jsxs("button", { onClick: handleBack, className: "flex items-center text-brand-dark font-medium mb-4 mt-2 w-fit hover:opacity-80", children: [_jsx(ChevronLeft, { className: "w-5 h-5 mr-1" }), "Back"] })), _jsxs("div", { className: "mb-6 px-1", children: [_jsx("h1", { className: "text-[34px] font-bold text-brand-dark mb-1.5 leading-tight tracking-tight", children: title }), _jsx("p", { className: "text-gray-500 text-[16px]", children: subtitle })] }), _jsx("div", { className: "flex flex-col gap-4 flex-1 pb-4", children: children })] }));
};
