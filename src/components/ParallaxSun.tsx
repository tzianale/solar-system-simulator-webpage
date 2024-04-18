'use client'; // Move the "use client" directive to the top of the file

import React, { useEffect, useState } from 'react';

const ParallaxSun: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY * 0.5); // Adjust the scroll speed as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-sun relative overflow-hidden">
      <div
        className="sun absolute top-1/2 bg-yellow-400 z-100 rounded-full"
        style={{ left: `${scrollX}px` }}
      ></div>
    </div>
  );
};

export default ParallaxSun;
