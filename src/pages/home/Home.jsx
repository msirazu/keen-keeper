import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/common/HeroSection";
import HomeFriendCards from "./HomeFriendCards";
import HomeStatCards from "./HomeStatCards";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Homepage | Keen Keeper</title>
            <meta name="description" content="keen keeper homepage"/>
        </Helmet>
        <div>
           <section id="title-section" className="pt-10">
            <div className="flex justify-center p-5 md:px-10">
                <HeroSection/>
            </div>
           </section>
           <section id="stats-section" className="py-5">
            <div>
                <HomeStatCards/>
            </div>
           </section>
           <hr className="border-gray-200"/>
           <section id="cards-section" className="py-5 space-y-5">
                <div>
                    <h4 className="text-center font-bold">Your Friends</h4>
                </div>
                <div>
                    <HomeFriendCards/>
                </div>
           </section>
        </div>
        </>
    );
};

export default Home;