import { Helmet } from "react-helmet-async";
import StatsChart from "../../components/common/StatsChart";

const Stats = () => {
  return (
    <>
      <Helmet>
        <title>Stats | Keen Keeper</title>
        <meta name="description" content="keen keeper stats page" />
      </Helmet>
      <div className="py-5 space-y-5">
        <section>
          <h2 className="font-bold text-2xl">Friendship Analytics</h2>
        </section>
        <section className="bg-white p-5 rounded-xl">
          <h4>By Interaction Type</h4>
          <div>
            <StatsChart/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Stats;
