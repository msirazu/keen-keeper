import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import { toast } from 'react-toastify';

const DataProvider = ({ children }) => {
const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);
const [call, setCall] = useState([]);
const [text, setText] = useState([]);
const [video, setVideo] = useState([]);

useEffect(() => {
    const friendsPromise = async() => {
       const res = await fetch('/data/data.json');
       const data = await res.json();
       setFriends(data);
       setLoading(false);
    }
    friendsPromise();
}, []);

const handleCall = (data) => {
    const isExist = call.find(c => c.id === data.id);
    if (isExist) {
        toast.error(`Call with ${data.name} Exist`);
        return;
    }
    setCall([...call, data]);
    toast.success(`Call with ${data.name}`);
}

const handleText = (data) => {
    const isExist = text.find(t => t.id === data.id);
    if (isExist) {
        toast.error(`Text with ${data.name} Exist`);
        return;
    }
    setText([...text, data]);
    toast.success(`Text with ${data.name}`);
}

const handleVideo = (data) => {
    const isExist = video.find(v => v.id === data.id);
    if (isExist) {
        toast.error(`Video with ${data.name} Exist`);
        return;
    }
    setVideo([...video, data]);
    toast.success(`Video with ${data.name}`);
}

    const dataInfo = {
        friends, setFriends, loading, call, text, video, handleCall, handleText, handleVideo
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;