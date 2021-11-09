import React, { useEffect } from 'react';
import Aos from 'aos';
import heroImg from '../../assets/img/slider-overimage.png';
import { Link } from 'react-router-dom';

import './Hero.css';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className='container-fluid hero'>
      <div className='container'>
        <div className='hero-img'>
          <img src={heroImg} alt='' data-aos='fade-down' />
        </div>
        <div className='hero-text text-center'>
          <p className='pt-4' data-aos='fade-up' data-aos-delay='250'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur repellat expedita maxime iusto iure odio, tempora
            aperiam perferendis deleniti quasi!
          </p>
          <Link
            to='about'
            className='btn footer-btn m-auto'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            Browser portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
