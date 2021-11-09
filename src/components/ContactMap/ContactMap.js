import React from 'react';
import Map from './Map';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <div className='container-fluid p-0 '>
      <div className='map'>
        <Map />
      </div>
    </div>
  );
};

export default ContactMap;
