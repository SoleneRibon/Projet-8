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
              alert("le mail a bien été envoyé")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
          

    
};
       

    return (

        
        <div className='bg-[#AC6FC6]'>
            <form ref={form} className='ml-5 mr-5 font-roboto '
            onSubmit={sendEmail}>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white 'htmlFor="name">Nom:</label>
                     <input aria-label='Nom' className='rounded-lg drop-shadow-lg md:h-10 ' id="name" type="text" name='name' />   
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white ' htmlFor="firstname">Prénom:</label>
                    <input aria-label='Prenom' className='rounded-lg drop-shadow-lg md:h-10' id="firstname" type="text" name='firstname'/>
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white' htmlFor="email">E-mail:</label>
                    <input aria-label='E-mail' className='rounded-lg drop-shadow-lg md:h-10' id="email" type="email" name='email'/>    
                </div>
                <div className='flex flex-col lg:w-[600px] lg:m-auto'>
                    <label className='text-white' htmlFor="message">Contenu de votre mail: </label>
                    <textarea className='rounded-lg drop-shadow-lg' name="message" id="message" cols="30" rows="8" ></textarea>    
                </div>
                <div className='lg:flex justify-center'>
                <input className='mt-5 mb-5 bg-[#6C3483] text-white w-full h-12 rounded-lg lg:w-[600px] hover:cursor-pointer'type='submit' value="Envoyer"/>
                </div>
            </form> 
        </div>       
        
    )

}
        
                    
                
export default Form;           
                    
                
                
                