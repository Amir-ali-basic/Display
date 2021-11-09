import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container error'>
      <div className='error-bg'>
        <h1>404</h1>
        <div className='error-text'>
          <h2>Pager not found</h2>
          <h2>Navigate back</h2>
          <Link to='/' className='btn footer-btn'>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
