import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button, Input } from '@adonais-eye/ui';
import { isValidSAID, isValidEmail, isValidSAMobile } from '../utils/validation';
export const Registration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        idNumber: '',
        email: '',
        mobile: '',
        gender: ''
    });
    const [errors, setErrors] = useState({});
    const handleSignUp = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!isValidSAID(formData.idNumber)) {
            newErrors.idNumber = 'Please enter a valid 13-digit SA ID number';
        }
        if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!isValidSAMobile(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid SA mobile number (e.g. 082 123 4567)';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        // Store temporarily and move to phone OTP verification
        sessionStorage.setItem('temp_registration', JSON.stringify(formData));
        navigate('/otp');
    };
    return (_jsxs("div", { className: "flex-1 flex flex-col bg-transparent px-6 py-6 h-full overflow-y-auto custom-scrollbar w-full max-w-md mx-auto", children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex items-center text-brand-dark font-medium mb-4 mt-2 w-fit hover:opacity-80", children: [_jsx(ChevronLeft, { className: "w-5 h-5 mr-1" }), "Back"] }), _jsxs("div", { className: "mb-4 px-1", children: [_jsx("h1", { className: "text-[34px] font-bold text-brand-dark mb-1.5 leading-tight tracking-tight", children: "Create your account" }), _jsx("p", { className: "text-gray-500 text-[16px]", children: "Please enter your authentic details to connect." })] }), _jsxs("form", { onSubmit: handleSignUp, className: "flex flex-col gap-3.5 flex-1 pb-4", children: [_jsx(Input, { label: "Full Name", placeholder: "e.g. Sipho Nkosi", value: formData.fullName, onChange: (e) => setFormData({ ...formData, fullName: e.target.value }), required: true }), _jsx(Input, { label: "SA ID Number (13 digits)", placeholder: "e.g. 9402145890081", value: formData.idNumber, onChange: (e) => setFormData({ ...formData, idNumber: e.target.value.replace(/\D/g, '').slice(0, 13) }), error: errors.idNumber, required: true }), _jsx(Input, { label: "Email Address", type: "email", placeholder: "sipho.nkosi@gmail.com", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), error: errors.email, required: true }), _jsx(Input, { label: "Mobile Number", type: "tel", placeholder: "+27 82 123 4567", value: formData.mobile, onChange: (e) => setFormData({ ...formData, mobile: e.target.value }), error: errors.mobile, required: true }), _jsxs("div", { className: "w-full", children: [_jsx("label", { className: "block text-[14px] font-medium text-gray-700 mb-1.5", children: "Gender" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { className: "w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white hover:border-gray-300 transition-all outline-none text-[16px] appearance-none font-medium text-brand-dark shadow-sm", value: formData.gender, onChange: (e) => setFormData({ ...formData, gender: e.target.value }), required: true, children: [_jsx("option", { value: "", disabled: true, children: "Select your gender" }), _jsx("option", { value: "male", children: "Male" }), _jsx("option", { value: "female", children: "Female" }), _jsx("option", { value: "other", children: "Other" })] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: _jsx("svg", { className: "fill-current h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" }) }) })] })] }), _jsxs("div", { className: "mt-4 text-[13px] text-gray-500 leading-relaxed", children: ["By signing up, you agree to the ", _jsx("a", { href: "#", className: "text-brand-blue font-semibold hover:underline", children: "Terms of Service" })] }), _jsxs("div", { className: "mt-2 flex flex-col gap-4 items-center", children: [_jsx(Button, { type: "submit", size: "lg", className: "w-full", children: "Sign Up" }), _jsx("button", { type: "button", onClick: () => navigate('/otp'), className: "text-[13px] text-gray-400 font-semibold border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors w-fit", children: "Skip (Dev Bypass)" }), _jsxs("div", { className: "relative flex items-center py-2 w-full", children: [_jsx("div", { className: "flex-grow border-t border-gray-200" }), _jsx("span", { className: "flex-shrink-0 mx-4 text-gray-400 text-sm", children: "or" }), _jsx("div", { className: "flex-grow border-t border-gray-200" })] }), _jsxs(Button, { type: "button", variant: "secondary", size: "lg", className: "w-full font-medium", children: [_jsxs("svg", { className: "w-5 h-5 mr-3", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }), _jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }), _jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }), _jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })] }), "Sign up with Google"] })] })] })] }));
};
