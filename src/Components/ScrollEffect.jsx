import React, { useState, useEffect } from 'react';

const ScrollEffect = ({ slideDirection }) => {
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

  const animationClassName = `slide-in ${isVisible ? 'visible' : ''} ${slideDirection}`;

  return (
    <div className={animationClassName}>
      {/* Your content goes here */}
      Slide-in Content
    </div>
  );
};

export default ScrollEffect;