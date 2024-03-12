import React from 'react';



function Modal ({closeModal}) {
    return (
        <>
            <div
            onClick={closeModal}
            className='fixed inset-0 bg-slate-400/60'>
            </div>
            <div className='fixed z-10 top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-900 p-10'>
                <p>le contenu</p>
                <button
                className='absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100'
                onClick={closeModal}>X</button>
            </div>
            
        
        </>
    )



}

export default Modal;