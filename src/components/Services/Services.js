import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import { Website, Photography, Seo, Application, Bullet } from '../Icons/index';
import Aos from 'aos';

import './Services.css';

const Services = ({}) => {
  const { services, fetchServices, items } = useGlobalContext();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    fetchServices();
    Aos.init({});
  }, []);

  return (
    <>
      <div className='container'>
        <h2 className='text-uppercase py-3'>Services</h2>
      </div>

      <div className='container-fluid services'>
        <div className='container px-lg-3 px-0'>
          <div className='row  services m-0'>
            {services.map((tab, index) => {
              const { id, name, img } = tab;
              return (
                <div
                  className={
                    toggleState === index
                      ? 'col-3 text-center service active-tab'
                      : 'col-3 text-center service '
                  }
                  key={id}
                  onClick={() => toggleTab(index)}
                >
                  <div className='service-img'>
                    <img src={img} alt='' />
                  </div>
                  <h3 className='text-uppercase m-4 service-title'>{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='container service-text-container '>
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className={
                toggleState === index
                  ? 'd-none active-service services-text container py-4 px-0'
                  : 'd-none services-text container py-4'
              }
            >
              <p>{service.desc}</p>
              <ul className='ml-4 services-ul pt-3'>
                {service.details.map((sub, index) => {
                  return (
                    <div key={index}>
                      <li className='d-flex align-items-center justify-content-start'>
                        <Bullet />
                        <p className='mb-0 ml-2'>{sub.text}</p>
                      </li>
                      <li className='d-flex align-items-center justify-content-start'>
                        <Bullet />
                        <p className='mb-0 ml-2'>{sub.text2}</p>
                      </li>
                      <li className='d-flex align-items-center justify-content-start'>
                        <Bullet />
                        <p className='mb-0 ml-2'>{sub.text3}</p>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
