import React from 'react';
import { useTranslation } from 'react-i18next';
import location from "../../assets/Images/location.png";
import phone from "../../assets/Images/phone.png";
import mail from "../../assets/Images/mail.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='bg-[#fff] text-white mt-20 '> 
      <div className='container bg-[#000] rounded-t-3xl'>
        <div>
          <h1 className='py-10 text-3xl font-bold text-yellow text-center'>{t('Contact Us')}</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <img src={location} alt="" className='max-w-[40px]' />
              </div>
              <p>Hitech City Hyderabad Telangana India 500007</p>
            </div>
              
            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <img src={mail} alt="" className='max-w-[40px]' />
              </div>
              <p>test@gmail.com</p>
              <p>test1@gmail.com</p>
            </div>

            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <img src={phone} alt="" className='max-w-[40px]' />
              </div>
              <p>+91 1234567890</p>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='bg-[#111] py-6'>
          <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div>
              <h2 className='text-lg font-bold mb-4'>{t('Quick Links')}</h2>
              <ul className='space-y-2'>
                <li><a href='/home' className='hover:underline'>{t('Home')}</a></li>
                <li><a href='/about' className='hover:underline'>{t('About Us')}</a></li>
                <li><a href='/services' className='hover:underline'>{t('Services')}</a></li>
                <li><a href='/contact' className='hover:underline'>{t('Contact')}</a></li>
                <li><a href='/faq' className='hover:underline'>{t('FAQ')}</a></li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4'>{t('Resources')}</h2>
              <ul className='space-y-2'>
                <li><a href='/blog' className='hover:underline'>{t('Blog')}</a></li>
                <li><a href='/help' className='hover:underline'>{t('Help Center')}</a></li>
                <li><a href='/support' className='hover:underline'>{t('Support')}</a></li>
                <li><a href='/terms' className='hover:underline'>{t('Terms of Service')}</a></li>
                <li><a href='/privacy' className='hover:underline'>{t('Privacy Policy')}</a></li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4'>{t('Follow Us')}</h2>
              <ul className='space-y-2'>
                <li><a href='https://facebook.com' className='hover:underline'>Facebook</a></li>
                <li><a href='https://twitter.com' className='hover:underline'>Twitter</a></li>
                <li><a href='https://instagram.com' className='hover:underline'>Instagram</a></li>
                <li><a href='https://linkedin.com' className='hover:underline'>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between p-4 items-center'>
          <p className="md:mr-4 mb-4 md:mb-0">© 2024 Virtual CXO Experts. {t('© 2024 Virtual CXO Experts. All rights reserved')}</p>
          <div className='flex items-center gap-6'>
            <a href='/privacy' className='hover:underline'>{t('Privacy Policy')}</a>
            <a href='/terms' className='hover:underline'>{t('Terms & Conditions')}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
