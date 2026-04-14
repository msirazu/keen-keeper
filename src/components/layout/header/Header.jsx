import { Link, NavLink } from 'react-router-dom';
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
                    <NavLink className={({isActive}) => `${isActive ? 'bg-footer text-white' : 'btn-ghost'} flex items-center gap-1 btn`} to={'/'}><IoMdHome className='text-lg'/>Home</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'bg-footer text-white' : 'btn-ghost'} flex items-center gap-1 btn`} to={'/timeline'}><RiTimeLine />Timeline</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'bg-footer text-white' : 'btn-ghost'} flex items-center gap-1 btn`} to={'/stats'}><ImStatsDots />Stats</NavLink>
                </div>
            </section>
        </div>
    );
};

export default Header;