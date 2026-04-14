import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');

    const authInfo = {
        activeTab,
        setActiveTab
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;