// eslint-disable-next-line no-unused-vars
import react ,{ useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



    const Navbar = () => {
        const [nav, setNav] = useState(false);
      
        const handleNav = () => {
          setNav(!nav);
        };
      
        return (
          <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-[#43C5F5]'>HololiveID</h1>
            <ul className='hidden md:flex bg-[#43C5F5] rounded-full text-white font-semibold cursor-pointer'>
              <li className='p-4'>Home</li>
              <li className='p-4'>About</li>
              <li className='p-4'>Talent</li>
              <li className='p-4'>Event</li>
              <li className='p-4'>Schedule</li>
              
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#43C5F5] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-white m-4'>HololiveID</h1>
                <li className='p-4 border-b border-gray-600 text-white font-semibold'>Home</li>
                <li className='p-4 border-b border-gray-600 text-white font-semibold'>About</li>
                <li className='p-4 border-b border-gray-600 text-white font-semibold'>Talent</li>
                <li className='p-4 border-b border-gray-600 text-white font-semibold'>Schedule</li>
               
            </ul>
          </div>
        );
      };
      

export default Navbar