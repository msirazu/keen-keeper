import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const AppProviders = ({ children }) => {
    return (
        <>
        <HelmetProvider>
            <ToastContainer/>
            {children}
        </HelmetProvider>
        </>
    );
};

export default AppProviders;