// eslint-disable-next-line no-unused-vars
import React from 'react'
import Video1 from './Video1'

const About = () => {
    const onlineVideoSource ="https://hololive.hololivepro.com/wp-content/uploads/2021/05/tokinosoralive.mp4"
  return (
    <div className='w-full h-screen bg-[#43C5F5]'>
         <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl text-white font-semibold mb-4">Live Streaming </h1>
            <h2 className="text-xl text-white font-semibold mb-4">The vast variety of hololive talents’ streams include gaming, singing, chatting with viewers, collaborations, and more! </h2>
            <Video1 videoSource={onlineVideoSource}  />
        </div>
    </div>
  )
}

export default About