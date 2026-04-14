import footerLogo from '../../../assets/icons/logo-xl.png';
import facebookIcon from '../../../assets/icons/facebook.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import twitterIcon from '../../../assets/icons/twitter.png';

const Footer = () => {
    const date = new Date();
    return (
        <div>
            <section className='py-10 flex flex-col gap-5 justify-center items-center'>
                <img src={footerLogo} alt="keen keeper logo" className='w-50 md:w-75'/>
                <p className='footer-text-two text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='space-y-2 flex flex-col justify-center items-center'>
                <h5 className='text-white'>Social Links</h5>
                <div className='flex gap-1'>
                    <img src={instagramIcon} alt="instagram icon" className='w-5 h-5'/>
                    <img src={facebookIcon} alt="facebook icon" className='w-5 h-5'/>
                    <img src={twitterIcon} alt="twitter icon" className='w-5 h-5'/>
                </div>
                </div>
            </section>
            <section className="footer-text-two flex justify-center py-5 border-t border-gray-500 flex-col items-center md:justify-between gap-2">
                <div>
                    <p className="">Copyright © {date.getFullYear()} - KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex gap-5">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;