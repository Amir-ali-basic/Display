import React from 'react';
import './AboutSection.css';
import aboutImg from '../../assets/img/img-about.png';

const AboutSection = () => {
  return (
    <>
      <div className='container-fluid about-header'>
        <div className='container h-100 d-flex align-items-center'>
          <h2 className='clr-white text-uppercase mb-0'>About my business</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row py-lg-4'>
          <div className='col-lg-5 col-sm-12 about-img'>
            <img src={aboutImg} alt='' className='w-100' />
          </div>
          <div className='col-lg-7 col-sm-12'>
            <div className='about-text'>
              <p className='mt-0'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam est molestiae repellat. Excepturi inventore hic atque
                aspernatur consequuntur a eveniet ducimus sed nulla delectus,
                soluta fugit autem at ratione. Maxime quis, consequatur sed id
                dolore incidunt molestiae blanditiis vitae quo architecto
                voluptate, odit quas unde esse aspernatur. Pariatur, ipsum? Quis
                dolorem explicabo saepe temporibus omnis maxime. Non magni vitae
                eveniet quaerat nulla aspernatur harum architecto placeat
                necessitatibus quod sed sunt quae voluptates praesentium hic cum
                aperiam modi, expedita vero dolore. Ullam natus corrupti aliquid
                voluptatibus ducimus nulla, similique, saepe iure impedit
                doloremque consequatur dicta sit atque recusandae amet illo nam
                libero, harum commodi. Tempore dolorum qui rem a laudantium ea
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <h2 className='pt-3 pb-2 text-uppercase'>Misssion statement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
              recusandae, quos possimus, ipsam sequi eaque, aliquam soluta id
              iste quod! Neque, iste dolorum. Quo, tenetur vel autem repellendus
              recusandae fugiat dolores rerum error quisquam distinctio
              blanditiis voluptatum a quia.
            </p>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <h2 className='pt-3 pb-2 text-uppercase'>Fan Fact</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
              recusandae, quos possimus, ipsam sequi eaque, aliquam soluta id
              iste quod! Neque, iste dolorum. Quo, tenetur vel autem repellendus
              recusandae fugiat dolores rerum error quisquam distinctio
              blanditiis voluptatum a quia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
