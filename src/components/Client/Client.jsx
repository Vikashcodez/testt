import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import trade1 from "../../assets/Images/trade1.png";
import trade2 from "../../assets/Images/trade2.png";
import trade3 from "../../assets/Images/trade3.png";
import trade4 from "../../assets/Images/trade4.png";
import trade5 from "../../assets/Images/trade5.png";
import trade6 from "../../assets/Images/trade6.png";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Autoplay } from 'swiper/modules';

function Client() {
    const { t } = useTranslation(); // Initialize useTranslation hook

    const [active, setActive] = useState(null);
    const langs = [
        { name: t("Audit and Assurance Services"), logo: trade1, color: "hue-rotate-[240deg]", description: t("Conducting financial audits and providing assurance on financial statements.") },
        { name: t("Taxation Services"), logo: trade2, color: "hue-rotate-[20deg]", description: t("Advising on tax compliance, planning, and strategies for businesses and individuals") },
        { name: t("Financial Reporting"), logo: trade3, color: "hue-rotate-[340deg]", description: t("Preparing and analyzing financial reports in compliance with accounting standards.") },
        { name: t("Management Consulting"), logo: trade4, color: "hue-rotate-[40deg]", description: t("Providing expertise on various management issues, such as risk management, performance improvement, and business strategy.") },
        { name: t("Forensic Accounting"), logo: trade5, color: "hue-rotate-[80deg]", description: t("Investigating financial irregularities, fraud, and financial disputes.") },
        { name: t("Financial Management"), logo: trade6, color: "hue-rotate-[270deg]", description: t("Offering guidance on financial planning, budgeting, and investment decisions.") },
        { name: t("Financial Planning and Analysis"), logo: trade1, color: "hue-rotate-[270deg]", description: t("Developing financial plans, forecasts, and budgets to support business decisions.") },
        { name: t("Performance Management"), logo: trade2, color: "hue-rotate-[240deg]", description: t("Evaluating business performance, setting KPIs, and recommending performance improvement initiatives.") },
        { name: t("Risk Management"), logo: trade3, color: "hue-rotate-[20deg]", description: t("Identifying and managing financial risks, such as market risk, credit risk, and operational risk.") },
        { name: t("Internal Controls"), logo: trade4, color: "hue-rotate-[340deg]", description: t("Designing and evaluating internal control systems to safeguard assets and ensure compliance with regulations.") },
        { name: t("Strategic Management"), logo: trade5, color: "hue-rotate-[40deg]", description: t("Assisting in strategic planning, mergers and acquisitions, and business expansion initiatives.") },
        { name: t("Financial Advisory"), logo: trade6, color: "hue-rotate-[80deg]", description: t("Offering financial advice on investments, acquisitions, mergers, and capital restructuring.") },
        { name: t("Business Valuation"), logo: trade4, color: "hue-rotate-[270deg]", description: t("Determining the value of businesses for purposes such as mergers, acquisitions, or regulatory compliance.") },
    ];

    return (
        <>
            <div className='h-screen bg-[#fff] text-black flex flex-col items-center justify-center'>
                <h1 className='text-center text-3xl font-bold mb-4 text-gray-800'>{t('Our Services')}</h1>
                <div className='w-full max-w-5xl px-4'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={(cur) => setActive(cur.realIndex)}
                        loop={true}
                        centeredSlides={true}
                        speed={800}
                        autoplay={{
                            delay: 3000,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {langs.map((lang, index) => (
                            <SwiperSlide key={index}>
                                <div className='h-96 flex items-center justify-center'>
                                    <div className={`card ${active === index && "card-active"} bg-red-600/40 p-4 ${lang.color} border-red-600 rounded-lg w-full h-full flex flex-col items-center`}>
                                        <div className='logo'>
                                            <img src={lang.logo} alt={lang.name} className='w-24 h-24' />
                                        </div>
                                        <h2 className='text-2xl mt-4 font-semibold text-center'>{lang.name}</h2>
                                        <p className='text-center mt-2'>{lang.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Client;
