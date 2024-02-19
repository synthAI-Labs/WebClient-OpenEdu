'use client';
import anime from 'animejs';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

const SplashScreen = ({ finishLoading }: { finishLoading: any }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    animate();
  }, []);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: '#logo',
      delay: 0,
      scale: 1,
      duration: 2000,
      easing: 'easeInOutExpo',
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return isMounted ? (
    <div className="flex flex-col h-screen items-center justify-center bg-slate-800">
      {/* <div>
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to <br />
        </h1>
        <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ['OpenEdu'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div> */}
      {/* Only LOGO:: OpenEdu-logos_black copy.png */}
      {/* With text:: OpenEdu-logos_black.png */}
      <div>
        <motion.img
          id="logo"
          src="/OpenEdu-logos_white copy.png"
          alt="logo"
          width={300}
          height={300}
          className=" "
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1, 1.5, 1, 30] }}
          transition={{ delay: 0, duration: 2, ease: 'easeInOut' }}
        />
        {/* <p className=" text-2xl text-muted-foreground">
          Education for All, For free
        </p> */}
      </div>
    </div>
  ) : null;
};

export default SplashScreen;
