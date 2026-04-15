import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
    const { id, name, days_since_contact, tags, status, picture } = friend;
    return (
        <>
        <Link to={`/friend-details/${id}`}>
        <div className="bg-white p-5 rounded-xl flex justify-center hover:shadow-xl cursor-pointer transition duration-400 hover:translate-y-1 hover:border-gray-200 border border-gray-100 h-full">
            <div className="flex flex-col justify-center items-center space-y-2">
            <img className="rounded-full w-15" src={picture} alt={name}/>
            <h2 className="font-bold text-lg text-center">{name}</h2>
            <h4 className="text-sm">{days_since_contact}d ago</h4>
            <p className="flex gap-2 flex-wrap justify-center">
            {tags.map((tag, ind) => <span className="uppercase tag-one" key={ind}>{tag}</span>)}
            </p>
            <h5 className={`capitalize ${status === 'on-track' ? 'status-on-track' : status === 'almost due' ? 'status-almost-due' : status === 'overdue' ? 'status-overdue' : 'status-none'}`}>{status}</h5>
            </div>
        </div>
        </Link>
        </>
    );
};

export default FriendCard;