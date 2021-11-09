import React from 'react';
import './Header.css';
import {
  Dribble,
  Facebook,
  Google,
  Pinterest,
  Rss,
  Twitter,
} from '../Icons/index';
import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <>
      <div className='header container py-3'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='header-icons'>
          <a href='https://twitter.com'>
            <Twitter />
          </a>
          <a href='https://facebook.com'>
            <Facebook className='header-icon' />
          </a>
          <a href='https://rss.com'>
            <Rss />
          </a>
          <a href='https://pinterest.com'>
            <Pinterest />
          </a>
          <a href='https://google.com'>
            <Google />
          </a>
          <a href='https://dribble.com'>
            <Dribble />
          </a>
        </div>
      </div>
      <div className='container'>
        <div className='line'></div>
      </div>
    </>
  );
};

export default Header;
