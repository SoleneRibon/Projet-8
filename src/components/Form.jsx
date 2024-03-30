import '../input.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
 
 
function Form () {
    
    const form = useRef();
    
    const sendEmail =(e) =>{
        e.preventDefault();
    

        

        emailjs
          .sendForm('service_0vhkv4n', 'template_rjyaqxk', form.current, {
            publicKey: 'lYxoc8XAFfdC3_sgk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
          

    
};
       

    return (

        
        <div className='bg-orange-300'>
            <form ref={form} className='ml-5 mr-5 font-roboto '
            onSubmit={sendEmail}>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white 'htmlFor="name">Nom:</label>
                     <input className='rounded-lg drop-shadow-lg md:h-10 ' type="text" name='name' id='nom' />   
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white ' htmlFor="firstname">Prénom:</label>
                    <input className='rounded-lg drop-shadow-lg md:h-10'  type="text" name='firstname' id='prenom'/>
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white' htmlFor="email">E-mail:</label>
                    <input className='rounded-lg drop-shadow-lg md:h-10' type="email" name='email'/>    
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white' htmlFor="message">Contenu de votre mail: </label>
                    <textarea className='rounded-lg drop-shadow-lg' name="message" id="message" cols="30" rows="8" ></textarea>    
                </div>
                <div className='lg:flex justify-center'>
                <input className='mt-5 mb-5 bg-orange-600 text-white w-full h-12 rounded-lg lg:w-[600px] hover:cursor-pointer'type='submit' value="Envoyer"/>
                </div>
            </form> 
        </div>       
        
    )

}
        
                    
                
export default Form;           
                    
                
                
                