import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() =>{
    const friendsPromise = async() => {
       const res = await fetch('/data/data.json');
       const data = await res.json();
       setFriends(data);
       setLoading(false);
    }
    friendsPromise();
}, []);

    const dataInfo = {
        friends,
        setFriends,
        loading
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;