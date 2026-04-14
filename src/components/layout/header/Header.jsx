import { Link } from 'react-router-dom';
import logoImg from '../../../assets/icons/logo.png';
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Header = () => {
    return (
        <div>
            <section className='flex flex-col md:flex-row justify-between items-center py-5 gap-5'>
                <div>
                    <img src={logoImg} alt="keen keeper logo" />
                </div>
                <div className='flex gap-2 md:gap-1'>
                    <Link to={'/'}><button className='flex items-center gap-1 btn'><IoMdHome className='text-lg'/>Home</button></Link>
                    <Link to={'/'}><button className='btn flex items-center gap-1'><RiTimeLine />Timeline</button></Link>
                    <Link to={'/'}><button className='btn flex items-center gap-1 '><ImStatsDots />Stats</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Header;