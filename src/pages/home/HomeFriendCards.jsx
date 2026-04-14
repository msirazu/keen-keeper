import { useContext } from "react";
import DataContext from "../../features/context/DataContext";
import FriendCard from '../../components/ui/FriendCard';
import HashLoading from "../../components/common/HashLoader";

const HomeFriendCards = () => {
    const { friends, loading } = useContext(DataContext);
    if (loading) {
        return <HashLoading/>
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {friends.map(friend => <FriendCard friend={friend} key={friend.id}/>)}
        </div>
    );
};

export default HomeFriendCards;