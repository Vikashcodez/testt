// src/components/AboutUs.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/Images/x2.png'; // Adjust path as per your file structure
import Footer from '../Footer/Footer';
import '../i18n';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-8 bg-[#fff] mt-20">
      <h1 className="text-4xl font-bold mb-7 text-center">{t('aboutUs')}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={logo} alt="Company Logo" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">{t('ourConsultancy')}</h2>
          <p className="mb-4">{t('description1')}</p>
          <p className="mb-4">{t('description2')}</p>
          <p className="mb-4">{t('description3')}</p>
          <p>{t('contactUs')}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
