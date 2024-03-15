import '../input.css';
import React from "react";



function Form () {
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(new FormData(e.target))
        }
        

    return (

        
        <div className='bg-orange-300'>
            <form className='m-5 font-roboto '
            onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='text-white'htmlFor="nom">Nom:</label>
                     <input className='rounded-lg drop-shadow-lg' type="text" name='name' id='nom'/>   
                </div>
                <div className='flex flex-col'>
                    <label className='text-white' htmlFor="prenom">Prénom:</label>
                    <input className='rounded-lg drop-shadow-lg' type="text" name='firstname' id='prenom'/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-white' htmlFor="email">E-mail:</label>
                    <input className='rounded-lg drop-shadow-lg' type="email" name='email'/>    
                </div>
                <div className='flex flex-col'>
                    <label className='text-white' htmlFor="message">Contenu de votre mail: </label>
                    <textarea className='rounded-lg drop-shadow-lg' name="message" id="message" cols="30" rows="8"></textarea>    
                </div>
                <button className='mt-5 bg-orange-600 text-white w-full h-12 rounded-lg'type='submit'>Envoyer</button>
            </form> 
        </div>       
        
    )

}
        
                    
                
export default Form;           
                    
                
                
                