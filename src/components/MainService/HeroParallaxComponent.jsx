import React from 'react';
import HeroParallax from './HeroParallax';
import img1 from '../../assets/Images/trade1.png';
import img2 from '../../assets/Images/trade1.png';
import img3 from '../../assets/Images/trade1.png';
import img4 from '../../assets/Images/trade1.png';
import img5 from '../../assets/Images/trade1.png';
import img6 from '../../assets/Images/trade1.png';
import img7 from '../../assets/Images/trade1.png';
import img8 from '../../assets/Images/trade1.png';
import img9 from '../../assets/Images/trade1.png';
import img10 from '../../assets/Images/trade1.png';
import img11 from '../../assets/Images/trade1.png';
import img12 from '../../assets/Images/trade1.png';

const HeroParallaxComponent = () => {
  const products = [
    {
      title: "Moonbeam",
      link: " ",
      thumbnail: img1,
    },
    {
      title: " ",
      link: "",
      thumbnail: img2,
    },
    {
      title: "Rogue",
      link: "",
      thumbnail: img3,
    },
    {
      title: "Editorially",
      link: "",
      thumbnail: img4,
    },
    {
      title: "Editrix AI",
      link: "",
      thumbnail: img5,
    },
    {
      title: "Pixel Perfect",
      link: "",
      thumbnail: img6,
    },
    {
      title: "Algochurn",
      link: "",
      thumbnail: img7,
    },
    {
      title: "Aceternity UI",
      link: "",
      thumbnail: img8,
    },
    {
      title: "Tailwind Master Kit",
      link: " ",
      thumbnail: img9,
    },
    {
      title: "SmartBridge",
      link: " ",
      thumbnail: img10,
    },
    {
      title: "Renderwork Studio",
      link: " ",
      thumbnail: img1,
    },
    {
      title: "Creme Digital",
      link: " ",
      thumbnail: img3,
    },
    {
      title: "Golden Bells Academy",
      link: " ",
      thumbnail: img11,
    },
    {
      title: "Invoker Labs",
      link: " ",
      thumbnail: img12,
    },
    {
      title: "E Free Invoice",
      link: " ",
      thumbnail: img5,
    },
  ];

  return <HeroParallax products={products} />;
};

export default HeroParallaxComponent;
