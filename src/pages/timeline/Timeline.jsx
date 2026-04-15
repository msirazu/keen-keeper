import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import DataContext from "../../features/context/DataContext";
const Timeline = () => {
    const { activities } = useContext(DataContext);
    return (
        <>
        <Helmet>
            <title>Timeline | Keen Keeper</title>
            <meta name="description" content="keen keeper timeline page"/>
        </Helmet>
        <div className="py-5 space-y-5">
            <section>
                <div>
                    <h1 className="font-bold text-2xl">Timeline</h1>
                </div>
                <div>

                </div>
            </section>
            <section>
                <div className="flex flex-col gap-2">
                
                </div>
            </section>
        </div>
        </>
    );
};

export default Timeline;