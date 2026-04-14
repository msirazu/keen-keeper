import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../features/context/AuthProvider";
import DataProvider from "../features/context/DataProvider";

const AppProviders = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <DataProvider>
            <ToastContainer />
            {children}
          </DataProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
};

export default AppProviders;