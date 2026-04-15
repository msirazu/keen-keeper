import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import { toast } from 'react-toastify';

const DataProvider = ({ children }) => {
const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);
const [activities, setActivities] = useState([]);

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
    toast.success(`${type} with ${friend.name} added`);
}

const handleCall = (data) => {
    logActivity(data, 'call');
}

const handleText = (data) => {
    logActivity(data, 'text');
}

const handleVideo = (data) => {
    logActivity(data, 'video');
}

    const dataInfo = {
        friends, setFriends, loading, handleCall, handleText, handleVideo
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;