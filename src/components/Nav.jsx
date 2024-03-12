import React from 'react';
import { NavLink } from 'react-router-dom';
import '../input.css';


function Nav () {
    return (
        <nav className='flex justify-between font-roboto text-orange-600 font-medium'>
            <a href="#à-propos" className='hover:underline'> A propos</a>
            <a href="#mes-travaux" className='hover:underline'>Mes travaux</a>
            <a href="#contact" className='hover:underline'>Contact</a>
        </nav>

    )

}
export default Nav;