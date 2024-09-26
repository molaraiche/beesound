"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();

    const startDate = new Date("2024-11-28T00:00:00");
    const cycleLength = 2 * 24 * 60 * 60 * 1000;

    const timeElapsed = currentTime - startDate.getTime();
    const timeLeft = cycleLength - (timeElapsed % cycleLength);

    return timeLeft;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);

    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className='flex items-center justify-between w-full gap-8'>
        <div className='flex flex-col items-center'>
          <span>Day</span>
          <span> {days} </span>
        </div>
        <div className='flex flex-col items-center'>
          <span>Hours</span>
          <span> {hours} </span>
        </div>
        <div className='flex flex-col items-center'>
          <span> Minutes </span>
          <span> {minutes} </span>
        </div>
        <div className='flex flex-col items-center'>
          <span> seconds </span>
          <span> {seconds} </span>
        </div>
      </div>
    );
  };

  return (
    <div className='w-[350px] h-[60px] bg-dark-white py-[5px] px-9 mt-6 flex items-center justify-center text-black text-xl font-semibold'>
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default Counter;
