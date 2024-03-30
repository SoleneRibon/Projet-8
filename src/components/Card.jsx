import '../input.css';
import { useState } from 'react';
import React from "react";
import Modal from './Modal';

function Card({ projetDetails }) {
  const [showModal, setShowModal] = useState(false);
  
  if (showModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('active-modal');
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.classList.remove('active-modal');

  }

  return (
    <>
      <div
        onClick={openModal}
        className='w-full 
                    lg:w-[450px]
                    xl:w-[600px]'>
        <div className='shadow-2xl m-6 rounded-lg overflow-hidden font-roboto text-orange-600 hover:cursor-pointer hover:ml-3 hover:mr-3 '>

          <img className='w-full max-w-full max-h-full object-contain
                                  md:h-52
                                  xl:h-56'
            src={projetDetails.cover}
            alt={projetDetails.alt} />

          <div className='flex flex-row items-center justify-center h-12 
                                md:h-16
                                xl:h-20 '>
            <h2 className='ml-5'>{projetDetails.title}</h2>
          </div>

        </div>
      </div>
    
       {showModal && (
          
        <Modal projetDetails={projetDetails} closeModal={closeModal}/>
        
      )}
      
    </>
  )

}

export default Card;







