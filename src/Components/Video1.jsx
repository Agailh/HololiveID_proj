import React, { useRef, useEffect } from 'react';
import videoSource from '../assets/tokinosoralive.mp4'

const Video1 = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Loop the video when it ends
    const handleEnded = () => {
      videoRef.current.currentTime = 0; // Reset the video to the beginning
      videoRef.current.play(); // Start playing again
    };

    videoRef.current.addEventListener('ended', handleEnded);

    return () => {
      videoRef.current.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="aspect-w-16 aspect-h-9">
      <video
        ref={videoRef}
        className="w-4/5 h-auto mx-auto"
        autoPlay
        loop
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video1;