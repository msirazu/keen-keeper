import { useContext } from "react";
import StatCard from "../../components/ui/StatCard";
import DataContext from "../../features/context/DataContext";

const HomeStatCards = () => {
    const { friends } = useContext(DataContext);
    const totalFriends = friends.length;

    const onTrack = friends.filter(f => f.status === 'on-track');
    const totalOnTrack = onTrack.length;
    const overdue = friends.filter(f => f.status === 'overdue');
    const totalOverdue = overdue.length;
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <StatCard num={totalFriends} text={'Total Friends'}/>
            <StatCard num={totalOnTrack} text={'On Track'}/>
            <StatCard num={totalOverdue} text={'Need Attention'}/>
            <StatCard num={totalFriends} text={'Interactions This Month'}/>
        </div>
    );
};

export default HomeStatCards;