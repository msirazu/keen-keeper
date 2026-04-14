import HomeStatCard from "./HomeStatCard";

const HomeStatCards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <HomeStatCard num={10} text={'Total Friends'}/>
            <HomeStatCard num={3} text={'On Track'}/>
            <HomeStatCard num={6} text={'Need Attention'}/>
            <HomeStatCard num={12} text={'Interactions This Month'}/>
        </div>
    );
};

export default HomeStatCards;