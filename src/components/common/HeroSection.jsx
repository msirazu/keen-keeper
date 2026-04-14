import { FaPlus } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <div className="space-y-5">
                <h2 className="font-bold text-3xl text-center">Friends to keep close in your life</h2>
                <p className="footer-text-one text-center max-w-120">Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<div className="flex justify-center">
            <button className="btn bg-footer text-white flex items-center gap-1"><FaPlus />Add a Friend</button>
</div>
            </div>
    );
};

export default HeroSection;