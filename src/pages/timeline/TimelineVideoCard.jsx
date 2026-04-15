import videoIcon from '../../assets/icons/video.png';

const TimelineVideoCard = ({ v }) => {
    const date = new Date();
    const formatDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})
    const { name } = v;
    return (
        <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3">
            <div>
               <img src={videoIcon} className='w-8 h-8' alt="video icon" /> 
            </div>
            <div>
            <h3><span className="font-bold">Video</span> with {name}</h3>
            <p className="text-sm">{formatDate}</p>
            </div>
        </div>
    );
};

export default TimelineVideoCard;