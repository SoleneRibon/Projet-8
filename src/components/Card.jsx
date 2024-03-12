import '../input.css';
import { useState } from 'react';
import React from "react";
import {createPortal} from "react-dom";
import Modal from './Modal';


function Card({titre, image, alt}) {
  const [showModal, setShowModal] = useState(false);

  if(showModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
    return (
      <>
        <button 
          onClick={() => setShowModal(true)}
          className='w-full'>
          <div className='shadow-2xl m-6 rounded-lg overflow-hidden font-roboto text-orange-600 hover:cursor-pointer hover:ml-3 hover:mr-3'>
                
                  <img  className='w-full h-36' 
                        src={image} 
                        alt={alt}/> 
                        
                <div className='flex flex-row items-center justify-between min-h-12 '>
                  <h2 className='ml-5'>{titre}</h2>
                  <svg  className="w-6 h-6 object-cover mr-5"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" >
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                    />
                  </svg>
                </div>
                
          </div>
        </button>
        {showModal && 
        createPortal(
        <Modal closeModal={() => setShowModal
          (false)}/>, 
        document.body)}
      </>
    )
}

export default Card; 
              
               
                        
           
                

              
       