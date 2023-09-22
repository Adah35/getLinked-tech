'use client'
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            setTime({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer mt-6">
            <span className='mx-3'> <span className='text-[#FFFFFF] text-2xl'>{time.hours}</span>H</span>
            <span className='mx-3'> <span className='text-[#FFFFFF] text-2xl'>{time.minutes}</span>M</span>
            <span className='mx-3'> <span className='text-[#FFFFFF] text-2xl'>{time.seconds}</span>S</span>
        </div>
    );
};

export default Timer;
