import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import logo from '../../assets/Images/x2.png';

const Hero = () => {
  const { t } = useTranslation(); // Use useTranslation
  const [tagline, setTagline] = useState('');
  const [cursor, setCursor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const taglineText = t('Your CXO Experts'); // Use t function for translation
    let i = 0;
    const interval = setInterval(() => {
      setTagline(taglineText.substring(0, i));
      i++;
      if (i > taglineText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [t]); // Add t as a dependency to useEffect

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor(prevCursor => !prevCursor);
    }, 500);
    const repeatCursorInterval = setTimeout(() => {
      clearInterval(cursorInterval);
      setInterval(() => {
        setCursor(prevCursor => !prevCursor);
      }, 500);
    }, 5000);
    return () => {
      clearInterval(cursorInterval);
      clearTimeout(repeatCursorInterval);
    };
  }, []);

  const handleAboutUsClick = () => {
    navigate('/about');
  };

  return (
    <div className="relative bg-white h-screen flex flex-col items-center justify-center overflow-hidden shadow-xl top-0">
      <div className="absolute inset-0 bg-[#fff]"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8">
        <div className="flex justify-center md:mb-0">
          <img src={logo} alt={t('Company Logo')} className="w-120 md:w-100 mx-auto" />
        </div>
        <div className="text-center md:text-left md:ml-8 md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">{t('Virtual CXO Experts')}</h1>
          <div className="mt-2 md:mt-4">
            <p className="text-lg md:text-2xl text-gray-700 font-bold">
              {tagline}
              <span className={`cursor ${cursor ? 'blink' : ''}`}>|</span>
            </p>
            <p className="text-md md:text-lg text-gray-700 mt-2 md:mt-4">
              {t('Vurtual CXO Experts is a leading consultancy firm providing top-notch executive guidance to businesses. Our team of experienced CXOs helps you navigate complex challenges, drive growth, and achieve operational excellence.')}
            </p>
            <button 
              className="mt-4 md:mt-6 px-6 py-2 text-lg text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              onClick={handleAboutUsClick}
            >
              {t('About Us')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
