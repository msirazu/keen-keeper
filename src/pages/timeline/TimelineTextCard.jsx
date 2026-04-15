import textIcon from '../../assets/icons/text.png';

const TimelineTextCard = ({ t }) => {
    const date = new Date();
    const formatDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})
    const { name } = t;
    return (
        <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3">
            <div>
                <img className='w-8 h-8' src={textIcon} alt="text icon" />
            </div>
            <div>
            <h3><span className="font-bold">Text</span> with {name}</h3>
            <p className="text-sm">{formatDate}</p>
            </div>
        </div>
    );
};

export default TimelineTextCard;