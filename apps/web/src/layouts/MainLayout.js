import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, FileText, User } from 'lucide-react';
const FloatingNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/home' },
        { id: 'activity', icon: FileText, label: 'Activity', path: '/activity' },
        { id: 'account', icon: User, label: 'Account', path: '/profile' },
    ];
    return (_jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center px-2 py-2 z-50 w-auto gap-2", children: navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (_jsxs("button", { onClick: () => navigate(item.path), className: `flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-gray-100 text-brand-dark' : 'text-gray-500 hover:text-brand-dark'}`, children: [_jsx("div", { className: "relative", children: _jsx(Icon, { className: "w-[20px] h-[20px] mb-1", strokeWidth: isActive ? 2.5 : 2 }) }), _jsx("span", { className: `text-[11px] ${isActive ? 'font-bold' : 'font-medium'}`, children: item.label })] }, item.id));
        }) }));
};
export const MainLayout = () => {
    const location = useLocation();
    const isProtected = location.pathname.startsWith('/home') || location.pathname.startsWith('/profile') || location.pathname.startsWith('/activity') || location.pathname.startsWith('/services');
    return (_jsx("div", { className: "min-h-[100dvh] bg-white sm:bg-gray-50 flex flex-col", children: _jsx("main", { className: "flex-1 w-full max-w-md mx-auto p-0 sm:p-4 flex flex-col sm:my-8 relative", children: _jsxs("div", { className: "flex-1 bg-gradient-to-b from-brand-light/80 via-white to-white sm:shadow-xl sm:rounded-[40px] overflow-hidden relative flex flex-col", children: [_jsx(Outlet, {}), isProtected && _jsx(FloatingNav, {})] }) }) }));
};
