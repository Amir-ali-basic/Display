import React from 'react';
import { Helmet } from 'react-helmet';

import { ContactHeader, ContactMap, ContactForm } from '../../components/index';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Display | Contact</title>
        <meta name='description' content='best digital agency' />
      </Helmet>
      <ContactHeader />
      <ContactMap />
      <ContactForm />
    </div>
  );
};

export default Contact;
