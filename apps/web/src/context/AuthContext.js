import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const login = (newUser, newProfile) => {
        setUser(newUser);
        setProfile(newProfile);
    };
    const logout = () => {
        setUser(null);
        setProfile(null);
    };
    const updateProfile = (updatedProfile) => {
        setProfile(updatedProfile);
    };
    return (_jsx(AuthContext.Provider, { value: { user, profile, login, logout, updateProfile }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
