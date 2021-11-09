import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import { MdOutlineSwipe } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const { links, fetchLinks } = useGlobalContext();
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <>
      <nav>
        <div className='navbar container py-2'>
          <ul className='nav-links text-uppercase'>
            {links.map((link) => {
              const { id, name, style, activeClass, path } = link;
              return (
                <li key={id}>
                  <NavLink
                    exact
                    className={style}
                    activeClassName={activeClass}
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className='mobile-icon'>
        <MdOutlineSwipe className='swipe-icon' />
      </div>
    </>
  );
};

export default Navbar;
