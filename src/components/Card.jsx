import '../input.css';
import { useState } from 'react';
import React from "react";
import Modal from './Modal';

function Card({ projetDetails }) {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div
        onClick={openModal}
        className='w-full lg:w-[450px] xl:w-[600px]'>
        <div className='shadow-2xl m-6 rounded-lg overflow-hidden font-roboto text-[#6C3483] hover:cursor-pointer hover:ml-3 hover:mr-3'>
          <img className='w-full max-w-full max-h-32 object-fit md:max-h-52 lg:h-44 xl:h-54' src={projetDetails.cover} alt={projetDetails.alt} />
          <div className='flex flex-row items-center justify-center h-12 md:h-16 xl:h-20'>
            <h3 className='ml-5 text-[#6C3483]'>{projetDetails.title}</h3>
          </div>
        </div>
      </div>
    
      {showModal && (
        <div>
          <Modal projetDetails={projetDetails} closeModal={closeModal}/>
        </div>
      )}
    </>
  )
}

export default Card;





