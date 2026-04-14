const HomeFriendCard = ({ friend }) => {
    const { name, days_since_contact, tags, status, picture } = friend;
    return (
        <div className="bg-white p-5 rounded-xl flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-1">
            <img className="rounded-full w-15" src={picture} alt={name}/>
            <h2 className="font-bold text-lg">{name}</h2>
            <h4 className="text-sm">{days_since_contact}d ago</h4>
            <p className="flex gap-2">
            {tags.map((tag, ind) => <span className="uppercase text-sm" key={ind}>{tag}</span>)}
            </p>
            <h5>{status}</h5>
            </div>
        </div>
    );
};

export default HomeFriendCard;