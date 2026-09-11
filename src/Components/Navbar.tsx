import Logo from '../assets/logo-text.png'
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className='inter w-full body flex justify-between items-center'>
            <div className='flex items-center gap-34'>
                <button className="md:hidden">
                    <IoMenuSharp className='text-3xl' />
                </button>
                <img src={Logo}alt="" />
            </div>
            <div className=" hidden md:flex list-none items-center font-medium text-[1rem] text-[#475569] gap-7">
                
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className='flex items-center gap-3'>
                <h2>Sign In</h2>
                <button className="btn btn-active btn-secondary  rounded-[55px]">Sign Up</button>

            </div>
        </nav>
    );
};

export default Navbar;