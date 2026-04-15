import { useContext } from "react";
import DataContext from "../../features/context/DataContext";

const TimelinFilter = () => {
    const { handleFilter } = useContext(DataContext);
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Filter By</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><button onClick={() => handleFilter('type')}>Type (A to Z)</button></li>
                <li><button onClick={() => handleFilter('type2')}>Type (Z to A)</button></li>
            </ul>
        </div>
    );
};

export default TimelinFilter;