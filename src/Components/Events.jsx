// eslint-disable-next-line no-unused-vars
import React from 'react'

import Event1 from '../assets/geloraholo.png'


const Events = () => {
  return (
    <div id='event' className='bg-gray-100 '>
        <h1 className='text-center text-4xl font-bold text-[#26C6FF]'>Events</h1>
        <h2 className='text-center text-2xl font-semibold text-[#FC8054]'>Exciting events that we hold </h2>
        <div className='min-h-screen flex justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl p-8 bg-[#43C5F5] rounded-3xl hover:scale-105">
                <div className="flex flex-col justify-center md:w-[400px]">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#FF7B4C]">We Celebrate Many Events </h1>
                    <p className="text-base md:text-lg text-white mb-8 text-justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam culpa optio voluptatibus consequatur adipisci dolorem sit autem. Adipisci commodi, culpa odio totam fuga asperiores earum exercitationem consequuntur ex libero.</p>
                <div className="flex justify-start space-x-4">
           
            </div>
        </div>
            <div className="flex justify-center items-center bg-gray-100 rounded-3xl">
                <div className='px-4 py-4'>
                    <img src={Event1} alt="Image 2" className="w-48 md:w-80 px rounded-xl" />
                </div>
            </div>
        </div>
       
      </div>


    </div>
  )
}

export default Events