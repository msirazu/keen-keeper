import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import DataContext from "../../features/context/DataContext";
import TimelineCallCard from "./TimelineCallCard";
import TimelineTextCard from "./TimelineTextCard";
import TimelineVideoCard from "./TimelineVideoCard";

const Timeline = () => {
    const { call, text, video } = useContext(DataContext);
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
                {call.map(c => <TimelineCallCard key={c.id} c={c}/>)}
                {text.map(t => <TimelineTextCard key={t.id} t={t}/>)}
                {video.map(v => <TimelineVideoCard key={v.id} v={v}/>)}
                </div>
            </section>
        </div>
        </>
    );
};

export default Timeline;