import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import { toast } from 'react-toastify';
// import { activitySort } from "../../utils/sortBy";

const DataProvider = ({ children }) => {
const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);
const [activities, setActivities] = useState([]);
const [filterActivities, setFilterActivities] = useState([]);

useEffect(() => {
    const friendsPromise = async() => {
       const res = await fetch('/data/data.json');
       const data = await res.json();
       setFriends(data);
       setLoading(false);
    }
    friendsPromise();
}, []);

const logActivity = (friend, type) => {
    const newActivity = {
        id: crypto.randomUUID(),
        friendId: friend.id,
        name: friend.name,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'}),
        type: type
    }

    const isExist = activities.find(a => a.friendId === friend.id && a.type === type);

    if (isExist) {
        toast.error(`${type} with ${friend.name} Exist`);
        return;
    }

    setActivities([newActivity, ...activities]);
    setFilterActivities([newActivity, ...filterActivities]);
    toast.success(`${type} with ${friend.name}`);
}

const handleCall = (data) => {
    logActivity(data, 'Call');
}

const handleText = (data) => {
    logActivity(data, 'Text');
}

const handleVideo = (data) => {
    logActivity(data, 'Video');
}

const handleFilter = (type) => {
    if (type === 'all') {
        setFilterActivities(activities);
    } else {
        const filtered = activities.filter(a => a.type === type);
        setFilterActivities(filtered);
    }
}

    const dataInfo = {
        friends, setFriends, loading, handleCall, handleText, handleVideo, activities, handleFilter, setFilterActivities, filterActivities
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;