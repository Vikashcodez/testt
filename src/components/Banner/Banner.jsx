import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import trade1 from "../../assets/Images/trade1.png";
import trade2 from "../../assets/Images/trade2.png";
import trade3 from "../../assets/Images/trade3.png";
import trade4 from "../../assets/Images/trade4.png";
import trade5 from "../../assets/Images/trade5.png";
import trade6 from "../../assets/Images/trade6.png";

const logos = [
  trade1,
  trade2,
  trade3,
  trade4,
  trade5,
  trade6,
];

const Banner = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  };

  return (
    <div className="banner-section bg-gray-100 shadow-md text-black py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-12">{t('Our Clients')}</h2>
        <Slider {...settings} className="slider">
          {logos.map((logo, index) => (
            <div key={index} className="p-8 flex items-center justify-center">
              <img src={logo} alt={t(`Client logo ${index + 1}`)} className="h-40 md:h-72 lg:h-72 xl:h-80" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
