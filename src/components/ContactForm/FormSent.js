import React, { useEffect } from 'react';
import Aos from 'aos';

const FormSent = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <h2 data-aos='fade-right'>Vasa forma je uspjesno poslata</h2>
    </div>
  );
};

export default FormSent;
