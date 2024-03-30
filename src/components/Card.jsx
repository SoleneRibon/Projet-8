import '../input.css';
import { useState, useEffect } from 'react';
import React from "react";
import Modal from './Modal';




function Card({ alt, projetDetails }) {
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

  useEffect(() => {
    console.log(showModal)
  }, [showModal]);


  return (
    <>
      <div
        onClick={openModal}
        className='w-full 
                    lg:w-[450px]
                    xl:w-[601px]'>
        <div className='shadow-2xl m-6 rounded-lg overflow-hidden font-roboto text-orange-600 hover:cursor-pointer hover:ml-3 hover:mr-3 '>

          <img className='w-full h-36
                                  md:h-52
                                  xl:h-56'
            src={projetDetails.cover}
            alt={alt} />

          <div className='flex flex-row items-center justify-center h-12 
                                md:h-16
                                xl:h-20 '>
            <h2 className='ml-5'>{projetDetails.title}</h2>
          </div>

        </div>
      </div>
      <div onClick={closeModal}
        className={`fixed inset-0 bg-slate-400/60 w-full h-full flex justify-center items-center transition transition-opacity opacity-0 duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
       </div> 
       {showModal && (
          
        <Modal projetDetails={projetDetails} closeModal={closeModal} showModal={showModal}/>
        
            
      )}
      
    </>
  )

}

export default Card;







