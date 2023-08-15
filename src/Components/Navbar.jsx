// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-[#43C5F5]'>HololiveID</h1>
        <ul className='hidden md:flex bg-[#43C5F5] rounded-full text-white font-semibold cursor-pointer'>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            <li className='p-4 cursor-pointer'>Home</li>
          </Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <li className='p-4 cursor-pointer'>About</li>
          </Link>
          <Link to="talent" smooth={true} duration={500} offset={-70}>
            <li className='p-4 cursor-pointer'>Talent</li>
          </Link>
          <Link to="event" smooth={true} duration={500} offset={-70}>
            <li className='p-4 cursor-pointer'>Event</li>
          </Link>
          <Link to="schedule" smooth={true} duration={500} offset={-70}>
            <li className='p-4 cursor-pointer'>Schedule</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#43C5F5] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-white m-4'>HololiveID</h1>
            <Link to="home" smooth={true} duration={500} offset={-70}>
              <li className='p-4 border-b border-gray-600 text-white font-semibold'>Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <li className='p-4 border-b border-gray-600 text-white font-semibold'>About</li>
            </Link>
            <Link to="talent" smooth={true} duration={500} offset={-70}>
              <li className='p-4 border-b border-gray-600 text-white font-semibold'>Talent</li>
            </Link>
            <Link to="schedule" smooth={true} duration={500} offset={-70}>
              <li className='p-4 border-b border-gray-600 text-white font-semibold'>Schedule</li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;