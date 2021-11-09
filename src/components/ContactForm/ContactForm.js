import React from 'react';
import './ContactForm.css';

import { useGlobalContext } from '../../context/Context';
import Form from './Form';
import FormSent from './FormSent';

const ContactForm = () => {
  const { formSent } = useGlobalContext();
  const email = 'info@display.com';

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-sm-12 py-5'>
          <h2 className='text-uppercase'>Contact form</h2>
          {formSent ? <FormSent /> : <Form />}
        </div>
        <div className='col-lg-4 col-sm-12 py-5'>
          <div className='contact-info'>
            <h2 className='text-uppercase'>Contact Info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              nam.
            </p>
            <p>
              <span>email:</span>
              <a href={`mailto:${email}`} className='mail-clr'>
                info@display.com
              </a>
              <br />
              <span>phone:</span>1.306.222.4545
            </p>
            <p>
              222 2nd Ave South <br />
              Saskabush,SK 7M 1T6
            </p>
          </div>
          <div className='store-hours'>
            <h2 className='text-uppercase'>STORE HOURS</h2>
            <table className='w-100'>
              <tr>
                <th>Monday - Thursday</th>
                <th>8 am - 5 pm</th>
              </tr>
              <tr>
                <th>Friday</th>
                <th>8 am - 6 am</th>
              </tr>
              <tr>
                <th>Saturday</th>
                <th>9 am - 5 am</th>
              </tr>
              <tr>
                <th>Sunday &#38; Holidays </th>
                <th>Closed</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
