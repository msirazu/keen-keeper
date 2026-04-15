import callIcon from '../../assets/icons/call.png';
import textIcon from '../../assets/icons/text.png';
import videoIcon from '../../assets/icons/video.png';
import { ImCross } from "react-icons/im";

const TimelineCard = ({ act }) => {
    const {name, date, type} = act;

    return (
        <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3">
            <div>
                <img className='w-8 h-8' src={type === 'Call' ? callIcon : type === 'Text' ? textIcon : type === 'Video' ? videoIcon : <ImCross />} alt={`${type} icon`} />
            </div>
            <div>
            <h3><span className="font-bold">{type}</span> with {name}</h3>
            <p className="text-sm">{date}</p>
            </div> 
        </div>
    );
};

export default TimelineCard;