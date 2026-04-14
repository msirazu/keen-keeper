import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

const HomeLayout = () => {
    return (
        <div className="font-geist">
            <header className="border-b border-gray-200">
                <section className='w-11/12 lg:w-10-12 mx-auto'>
                <Header/>
                </section>
            </header>
            <main className="bg-body">
                <section className='w-11/12 lg:w-10-12 mx-auto'>
                <Outlet/>
                </section>
            </main>
            <footer className="bg-footer">
                <section className='w-11/12 lg:w-10-12 mx-auto'>
                <Footer/>
                </section>
            </footer>
        </div>
    );
};

export default HomeLayout;