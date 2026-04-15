import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../features/context/DataContext";
import FriendDetail from "../../components/ui/FriendDetail";
import NoFriend from "../not-found/NoFriend";
import HashLoading from "../../components/common/HashLoading";

const FriendDetails = () => {
    const { friends, loading } = useContext(DataContext);
    const { id } = useParams();
    const friend = friends.find(fnd => fnd.id === Number(id));

    if (loading) {
        return <HashLoading/>
    }

    if (!friend) {
        return <NoFriend/>
    }

    return (
        <div>
            <FriendDetail friend={friend}/>
        </div>
    );
};

export default FriendDetails;