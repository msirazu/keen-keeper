import { useContext } from "react";
import DataContext from "../../features/context/DataContext";
import HomeFriendCard from "./HomeFriendCard";

const HomeFriendCards = () => {
    const { friends, loading } = useContext(DataContext);
    if (loading) {
        return <p>loading....</p>
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {friends.map(friend => <HomeFriendCard friend={friend} key={friend.id}/>)}
        </div>
    );
};

export default HomeFriendCards;