/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Moona from '../assets/Moona_3d.png'
import Risu from '../assets/Risu_3d.png'
import HololiveID from '../assets/Hololive_INDONESIA_logo.png'



const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const triggerOffset = 100; // Adjust this value as needed

    if (scrollTop > triggerOffset) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
        
  return (

    
        <div id='home' className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 ">
                <div className="flex justify-center items-center  ">
                    <div className={`slide-in ${isVisible ? 'visible' : ''}`}>
                        <img src={Risu} alt="Image 1" className="w-48 md:w-80 " />
                    </div>
                </div>
                <div className="flex flex-col justify-center md:w-[400px]">
                    <img src={HololiveID} alt="logoid" className='w-72 md:w-full' />
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#FF7B4C]">Vtuber Agency</h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 text-justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam culpa optio voluptatibus consequatur adipisci dolorem sit autem. Adipisci commodi, culpa odio totam fuga asperiores earum exercitationem consequuntur ex libero.</p>
                <div className="flex justify-start space-x-4">
                    <button className="bg-[#43C5F5] hover:bg-[#0db5f2] text-white px-4 py-2 rounded-full">About Us</button>
                    <button className=" hover:bg-gray-200 text-black px-4 py-2 rounded-full">Youtube Channel</button>
                </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className={`slide-in ${isVisible ? 'visible' : ''}`}>
                        <img src={Moona} alt="Image 2" className="w-48 md:w-80" />
                    </div>
                </div>
            </div>
        </div>
    
    
  )
    
}

export default Home