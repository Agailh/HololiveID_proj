// eslint-disable-next-line no-unused-vars
import React from 'react'

import videosrc from '../assets/tokinosoralive.mp4'

const About = () => {
   
  return (
    <div className='w-full h-screen bg-[#43C5F5]'>
         <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl md:text-3xl text-white font-bold text-center mb-4">Live Streaming </h1>
            <h2 className="text-lg  md:text-xl text-white font-semibold text-center mb-4">The vast variety of hololive talents’ streams include gaming, singing, chatting with viewers, collaborations, and more! </h2>
            <video src={videosrc} autoPlay loop  className='w-[1080px]'/>
        </div>
    </div>
  )
}

export default About