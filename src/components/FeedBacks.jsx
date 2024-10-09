import React, { useState, useEffect } from 'react';
import styles from '../styles';
import { feedback } from '../constants'; 
import { CommentIcon, LeftArrowIcon, RightArrowIcon } from '../assets'; // آیکون‌های فلش چپ و راست

const FeedBacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 10000); 
    return () => clearInterval(intervalId); 
  }, []);

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!startTouch) return;
    
    const endTouch = e.changedTouches[0].clientX;
    const diff = startTouch - endTouch;

    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }

    setStartTouch(null);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`border-3 flex flex-col gap-[1vw] justify-center items-center ${styles.paddingY} mx-[10%] text-[30px]`}>
      <div className='flex flex-row justify-center items-center gap-[10px]'>
        <h2 className='font-bold text-primary sm:text-[1em] text-[0.6em]'>نظرات شما</h2>
        <img src={CommentIcon} alt="Comment Icon" className='sm:w-[70px] w-[50px]' />
      </div>
      <div 
        className='relative w-[300px] overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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

        <button 
          className='hidden sm:block absolute left-0 top-1/4 transform -translate-y-1/2 p-2 rounded-full'
          onClick={goToPrevSlide}
        >
          <img src={LeftArrowIcon} alt="Left Arrow" className='w-[20px]' />
        </button>
        <button 
          className='hidden sm:block absolute right-0 top-1/4 transform -translate-y-1/2 p-2 rounded-full'
          onClick={goToNextSlide}
        >
          <img src={RightArrowIcon} alt="Right Arrow" className='w-[20px]' />
        </button>

        <div className='flex justify-center mt-10'>
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
