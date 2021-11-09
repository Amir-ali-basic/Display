import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useGlobalContext } from '../../context/Context';

const Form = () => {
  const { formData, formDataHandel, submit } = useGlobalContext();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div>
      <form onSubmit={(e) => submit(e)} className='form-group'>
        <input
          type='text'
          className='form-control contact-input my-3'
          id='name'
          placeholder='Name'
          onChange={(e) => formDataHandel(e)}
          value={formData.name}
          required
        />
        <input
          type='email'
          className='form-control contact-input'
          id='email'
          placeholder='Email Address'
          onChange={(e) => formDataHandel(e)}
          value={formData.email}
          required
        />
        <input
          type='text'
          id='subject'
          className='form-control contact-input my-3'
          placeholder='Subject'
          onChange={(e) => formDataHandel(e)}
          value={formData.subject}
          required
        />
        <textarea
          maxLength={1000}
          className='form-control'
          id='body'
          rows='10'
          onChange={(e) => formDataHandel(e)}
          value={formData.body}
          required
        ></textarea>
        <ReCAPTCHA
          className='my-3'
          sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
          onChange={() => setIsVerified(true)}
          required
        />
        <button disabled={!isVerified} className='btn footer-btn  my-3'>
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
