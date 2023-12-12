'use client';
import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
