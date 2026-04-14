import StatCard from "./StatCard";

const FriendDetail = ({ friend }) => {

    const { name, tags, status, picture, bio, days_since_contact, goal, next_due_date } = friend;
    return (
        <>
        <div className="py-10">
            <section className="flex gap-5">
                <div className="bg-white p-5 rounded-xl flex justify-center hover:shadow-xl cursor-pointer transition duration-400 hover:translate-y-1 hover:border-gray-200 border border-gray-100 flex-1">
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img className="rounded-full w-15" src={picture} alt={name} />
                        <h2 className="font-bold text-lg text-center">{name}</h2>
                        <h5 className={`capitalize ${status === 'on-track' ? 'status-on-track' : status === 'almost due' ? 'status-almost-due' : status === 'overdue' ? 'status-overdue' : 'status-none'}`}>{status}</h5>
                        <p className="flex gap-2 flex-wrap justify-center">
                            {tags.map((tag, ind) => <span className="uppercase tag-one" key={ind}>{tag}</span>)}
                        </p>
                        <p className="text-sm text-center">{bio}</p>
                    </div>
                </div>
                <div className="flex flex-col flex-2 gap-2">
                    <div className="flex gap-2 h-full">
                        <StatCard num={days_since_contact} text={'Days Since Contact'} />
                        <StatCard num={days_since_contact} text={'Days Since Contact'} />
                        <StatCard num={days_since_contact} text={'Days Since Contact'} />
                    </div>
                    <div className="bg-white py-3 px-2 rounded-lg h-full hover:shadow-xl cursor-pointer transition duration-400 hover:translate-y-1 hover:border-gray-200 border border-gray-100">
                        <div className="flex justify-between items-center ">
                            <h4 className="font-bold">Relationship Goal</h4>
                            <button className="btn">Edit</button>
                        </div>
                        <div>
                            <p className="text-sm">Connect every <span>30</span> days</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </div>
        </>
    );
};

export default FriendDetail;