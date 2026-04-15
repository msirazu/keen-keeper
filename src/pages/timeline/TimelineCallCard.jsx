import callIcon from '../../assets/icons/call.png';

const TimelineCallCard = ({ c }) => {
    const date = new Date();
    const formatDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})
    const { name } = c;
    return (
        <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3">
            <div>
                <img className='w-8 h-8' src={callIcon} alt="call icon" />
            </div>
            <div>
            <h3><span className="font-bold">Call</span> with {name}</h3>
            <p className="text-sm">{formatDate}</p>
            </div> 
        </div>
    );
};

export default TimelineCallCard;