import StatCard from "./StatCard";
import { IoIosAlarm, IoIosCall } from "react-icons/io";
import { MdDeleteOutline, MdMessage } from "react-icons/md";
import { FaArchive, FaVideo } from "react-icons/fa";

const FriendDetail = ({ friend }) => {

    const { name, tags, status, picture, bio, days_since_contact, goal, next_due_date } = friend;

    return (
        <>
        <div className="py-10">
            <section className="flex gap-5 flex-col md:flex-row">
                <div className="bg-white p-5 rounded-xl flex justify-center flex-1">
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
                    <div className="flex gap-2">
                        <StatCard num={days_since_contact} text={'Days Since Contact'} />
                        <StatCard num={goal} text={'Goal (Days)'} />
                        <StatCard num={next_due_date} text={'Next Due'} />
                    </div>
                    <div className="bg-white py-3 px-5 rounded-lg h-full">
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

            <section className="flex flex-col md:flex-row mt-5 gap-5">
            <div className="flex-1 flex flex-col gap-2">
                <p className="flex items-center gap-1 bg-white px-5 py-2 rounded-lg justify-center text-sm h-full"><IoIosAlarm />Snooze 2 weeks</p>
                <p className="flex items-center gap-1 bg-white px-5 py-2 rounded-lg justify-center text-sm h-full"><FaArchive />Archive</p>
                <p className="flex items-center gap-1 bg-white px-5 py-2 rounded-lg justify-center text-sm h-full text-red-500"><MdDeleteOutline />Delete</p>
            </div>
            <div className="flex-2 bg-white p-5 space-y-5">
                <h4 className="font-bold">Quick Check-In</h4>
                <div className="grid grid-cols-3 gap-5">
                    <button className="bg-gray-100 flex flex-col justify-center items-center py-2 rounded-sm cursor-pointer hover:bg-gray-200 gap-1"><IoIosCall className="text-xl"/>Call</button>
                    <button className="bg-gray-100 flex flex-col justify-center items-center py-2 rounded-sm cursor-pointer hover:bg-gray-200 gap-1"><MdMessage className="text-xl"/>Text</button>
                    <button className="bg-gray-100 flex flex-col justify-center items-center py-2 rounded-sm cursor-pointer hover:bg-gray-200 gap-1"><FaVideo className="text-xl"/>Video</button>
                </div>
            </div>
            </section>
        </div>
        </>
    );
};

export default FriendDetail;