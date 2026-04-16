const TimelineEmpty = () => {
    return (
        <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3 justify-center">
            <div className="py-10 px-5 space-y-3">
                <p className="text-xl font-bold text-center">No activity yet</p>
                <p className="text-sm text-center">Start by calling, texting, or video chatting with your friends.</p>
            </div>
        </div>
    );
};

export default TimelineEmpty;