import React, { useEffect } from 'react';
import Aos from 'aos';
import './WorkList.css';
import link from '../../assets/icons/link.svg';

const WorkGrid = ({ works, isLoading }) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  if (works.length === 0) {
    return (
      <h2 className='container works' data-aos='fade-right'>
        No projects
      </h2>
    );
  } else {
    return (
      <div className='container'>
        <div className='works-grid '>
          {works.length &&
            works.map((work) => {
              const { id, title, img } = work;
              return (
                <article className='single-work' data-aos='zoom-in' key={id}>
                  <img src={img} alt={title} />
                  <div className='article-overlay'>
                    <div className='overlay-image-circle'>
                      <img src={link} alt='' />
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    );
  }
};

export default WorkGrid;
