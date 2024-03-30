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
                    md:flex md:justify-center
                    lg:w-[450px]
                    xl:w-[600px]'>
        <div className='shadow-2xl m-6 rounded-lg overflow-hidden font-roboto text-[#6C3483] hover:cursor-pointer hover:ml-3 hover:mr-3 
                        md:w-[80%] '>

          <img className='w-full max-w-full max-h-32 object-fit
                                  md:max-h-52 
                                  lg:h-44
                                  xl:h-54'
            src={projetDetails.cover}
            alt={projetDetails.alt} />

          <div className='flex flex-row items-center justify-center h-12 
                                md:h-16
                                xl:h-20 '>
            <h3 className='ml-5 text-[#6C3483]'>{projetDetails.title}</h3>
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







