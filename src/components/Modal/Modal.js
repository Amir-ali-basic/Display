import React from 'react';
import ReactPlayer from 'react-player';
import './Modal.css';
import { useGlobalContext } from '../../context/Context';
import { IoClose } from 'react-icons/io5';

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay '
      }`}
    >
      <div className='modal-container'>
        <ReactPlayer
          width='100%'
          height='100%'
          url='https://www.youtube.com/embed/LMlCN6_vUvs'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          playing={isModalOpen}
          autoPlay={false}
        ></ReactPlayer>
        <button className='close-modal-btn' onClick={closeModal}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
