import React, { useEffect } from 'react';
import Aos from 'aos';
import './WorkList.css';

const WorkList = ({ works }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  if (works.length === 0) {
    return (
      <h1 className='container works' data-aos='fade-right'>
        No projects
      </h1>
    );
  } else {
    return (
      <div className='container works-list '>
        {works.length &&
          works.map((work) => {
            const { id, title, img, category } = work;
            return (
              <article className='single-work-list' data-aos='fade-up' key={id}>
                <img src={img} alt={title} />
              </article>
            );
          })}
      </div>
    );
  }
};

export default WorkList;
