import StatCard from "../../components/ui/StatCard";

const HomeStatCards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <StatCard num={10} text={'Total Friends'}/>
            <StatCard num={3} text={'On Track'}/>
            <StatCard num={6} text={'Need Attention'}/>
            <StatCard num={12} text={'Interactions This Month'}/>
        </div>
    );
};

export default HomeStatCards;