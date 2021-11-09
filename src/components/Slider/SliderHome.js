import React, { useEffect, useState, useRef } from 'react';
import { useGlobalContext } from '../../context/Context';
import { MdArrowBackIos } from 'react-icons/md';
import './Slider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  margin: 20,
  items: 4,
  center: true,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: [`<`, '>'],
  smartSpeed: 1000,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

const SliderHome = () => {
  const { items, fetchProjects, isLoading } = useGlobalContext();
  const [projects, setProjects] = useState(items);
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='container-fluid  py-5'>
      <div className='slider-header text-center pb-3'>
        <h2 className='text-uppercase'>A Couple of our featured projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia
          excepturi porro minus corporis a? Vel rerum natus ab consequatur.
        </p>
      </div>
      <div className='slider'>
        <OwlCarousel className='slider-items owl-carousel' {...options}>
          {!isLoading ? (
            items.length &&
            items.map((project, projectIndex) => {
              const { id, title, img, category, desc } = project;

              return (
                <div key={id} className='slide-wrapper'>
                  <div class='item'>
                    <img src={img} alt={title} />
                  </div>
                  <div className='item-text'>
                    <h2>{title}</h2>
                    <p className='text-center'>{desc}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='contaienr'>Loading...</div>
          )}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default SliderHome;
