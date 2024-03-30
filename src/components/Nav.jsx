import React from 'react';
import '../input.css';


function Nav () {
    return (
        <nav className='flex justify-between font-roboto text-white font-medium bg-[#6C3483] p-5
                        xl:justify-end xl:text'>
            <a href="#à-propos" className='hover:underline
                                         xl:ml-8'> A propos</a>
            <a href="#mes-travaux" className='hover:underline 
                                        xl:ml-8'>Mes travaux</a>
            <a href="#contact" className='hover:underline 
                                        xl:ml-8'>Contact</a>
        </nav>

    )

}
export default Nav;