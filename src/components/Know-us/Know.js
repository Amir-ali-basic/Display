import React from 'react';
import { useGlobalContext } from '../../context/Context';

import modalImg from '../../assets/img/video-player-placeholder.jpg';
import { Modal } from '../index';
import './Know.css';

const Know = () => {
  const { openModal } = useGlobalContext();

  return (
    <div className='container-fluid know-us py-5'>
      <Modal />
      <div className='container'>
        <div className='row '>
          <div className='col-lg-5 col-sm-12'>
            <img
              src={modalImg}
              alt=''
              className='w-100 cursor-pointer'
              onClick={openModal}
            />
          </div>
          <div className='col-lg-7 col-sm-12 '>
            <div className='know-us-text  pl-lg-0 pl-sm-4 pl-sx-4 pt-4 pt-lg-0 '>
              <h2 className='text-uppercase'>Get To know us a little better</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, rerum. Eum nam accusantium quam, autem adipisci harum
                vero beatae quibusdam, et ipsa impedit consequuntur itaque
                blanditiis facere iusto nisi, quo numquam voluptates velit
                dolore odit temporibus placeat. Sed atque sunt tenetur nostrum
                porro ipsam animi reprehenderit, aspernatur ipsa quidem. Eos!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores cumque beatae qui dolores iure porro voluptatum,
                doloremque similique? Quis aliquid assumenda amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
