import React from 'react';
import '../input.css';
import '../Page/main.css';
import { useState, useEffect } from 'react';
import ListProjets from '../assets/projet.json';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Form from '../components/Form';




function Home()  {
  const [data, setData] = useState([]);

    useEffect(() => {
        setData(ListProjets);

    }, [data]);
  return (
  <>
      <Header />
        <div className='bg-orange-600 p-5 font-roboto text-white'>
          <h2 id='à-propos' className='font-semibold text-2xl flex justify-center mb-5'>À propos</h2>
          <p className=''>Bonjour je suis Solène! Passionée par le developpement je me suis dirigée vers une formation de developpeur Web avec Openclassroom. Voici donc les projets que j'ai pu réaliser.</p>
        </div>
        <div id='mes-travaux'>
          {data.length > 0 ? (
            <>
              {data.map((projet) => (
                <Card image={projet.cover} titre={projet.title} />
              ))}
            </>
            ) : (
              <p>Une erreur est survenue lors de l'affichage des logements !</p>
            )}
        </div>
      <Form/>
      <Footer />
  </>
  )
}

export default Home;
                            

                        
        