import React, { useState, useEffect } from 'react';
import styles from '../styles';
import { feedback } from '../constants'; 
import { CommentIcon } from '../assets'; 

const FeedBacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
  };

  
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 10000); 

    return () => clearInterval(intervalId); 
  }, []);


  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`border-3 flex flex-col gap-[1vw] justify-center items-center ${styles.paddingY} mx-[10%] text-[30px]`}>
      <div className='flex flex-row justify-center items-center gap-[10px]'>
        <h2 className='font-bold text-primary sm:text-[1em] text-[0.6em]'>نظرات شما</h2>
        <img src={CommentIcon} alt="Comment Icon" className='sm:w-[70px] w-[50px]' />
      </div>
      <div className='relative w-[300px] overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {feedback.map((feed, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-5 w-[400px]'>
              <img src={feed.profile} alt="Profile" className='sm:w-[200px] w-[170px] rounded-full' />
              <p className='text-[#6060CD] text-[0.6em] w-[300px] text-center'>{feed.content}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center  mt-10'>
        {feedback.map((_, index) => (
          <span
            key={index}
            className={`h-[10px] w-[10px] rounded-full mx-[2px] cursor-pointer ${index === currentIndex ? 'bg-[#D9D9D9] w-[20px]' : 'bg-[#7CB4FF]'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      </div>
   
      
    </section>
  );
};

export default FeedBacks;
