import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';

import './Footer.css';

const Footer = () => {
  const { links, fetchLinks } = useGlobalContext();
  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <footer>
      <div className='footer page-footer py-5'>
        <div className='container footer-container'>
          <h2 className='clr-white'>ARE YOU READY TO BE BLOWN AWAY?</h2>
          <Link className='btn footer-btn' to='works'>
            Click here to find out
          </Link>
        </div>
      </div>
      <div className='copyrights mt-lg-0 mt-4'>
        <div className='container copyrights-container '>
          <p className='pb-0 mb-0'>
            COPYRIGHTS 2013 DISPLAY. ALL RIGHTS RESERVED.
          </p>
          <div className='navigation'>
            {links.map((link) => {
              const { id, name, path } = link;
              return (
                <Link key={id} to={path}>
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
