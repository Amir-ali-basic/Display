import React from 'react';
import { Helmet } from 'react-helmet';

import { AboutSection, Services } from '../../components/index';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Display | About </title>
        <meta name='description' content='best digital agency' />
      </Helmet>
      <AboutSection />
      <Services />
    </div>
  );
};

export default About;
