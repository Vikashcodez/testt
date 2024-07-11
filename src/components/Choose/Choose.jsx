import React from 'react';
import { useTranslation } from 'react-i18next';
import 'tailwindcss/tailwind.css';

const Choose = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-white py-16 overflow-hidden shadow-md">
      <div className="absolute inset-0 bg-black opacity-5"></div> {/* Added opacity */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase animate-fade-in">
            {t('Why Choose Us')}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">
            {t('Excellence in Consultancy Services')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in">
            {t('We provide professional consultancy services to help businesses reach their potential. Here are some reasons why clients choose us:')}
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative animate-fade-in bg-gray-200 p-8 rounded-md choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4-4h-4v4h4m4 4h-4v4h4M3 4h18m-6 12h6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('Expert Team')}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {t('Our team consists of experienced professionals who are experts in their fields.')}
              </dd>
            </div>
            <div className="relative animate-fade-in bg-gray-300 p-8 rounded-md choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v3.5l4 4.5M4 4h16v16H4z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('Tailored Solutions')}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {t('We provide solutions that are specifically tailored to meet the unique needs of each client.')}
              </dd>
            </div>
            <div className="relative animate-fade-in bg-gray-300 p-8 rounded-md choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-3h-3m6-6V4h-4m-6 6H4v4m0 4h16m-6 2h6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('Proven Track Record')}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {t('We have a proven track record of delivering successful projects and satisfied clients.')}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Choose;
