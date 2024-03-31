import React from 'react';
import '../input.css';
import '../Page/main.css';
import { useState, useEffect } from 'react';
import ListProjets from '../assets/projet.json';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Form from '../components/Form';
import Portfolio from '../assets/Portfolio.jpg';




function Home()  {
  const [data, setData] = useState([]);

    useEffect(() => {
        setData(ListProjets);

    }, [data]);
  return (
  
  <div className='font-roboto
                  md:text-lg 
                  xl:mr-7 xl:ml-7 xl:text-xl'>
      
      <Header />
      <h1 className='text-[#6C3483] flex justify-center text-center m-10 font-bold text-2xl
                    md:text-3xl'>Ribon Solène developpeuse web</h1>
        <div className='bg-[#6C3483] p-5 text-white
                        xl:flex '>
          <div className='w-full flex justify-center'>
            <img className=" rounded-full  h-40 w-40 object-contain 
                              md:h-44 md:w-44
                              xl:h-56 xl:w-56 xl:m-auto " src={Portfolio} alt=" Ribon Solène" />
          </div>
          <div className='xl:mr-7'>
            <h2 id='à-propos' className='font-semibold text-2xl flex justify-center mb-5
                              md:text-3xl
                              xl: '>À propos</h2>
            <p className='mb-5
                          xl:w-[900px]'>Bonjour je suis Solène! Pour en arriver là j'ai fait beaucoup de détours. En effet en commençant par une licence en biologie puis en passant par une licence de langue et civilisation japonaise, j'ai décidé de me lancer dans le developpement web. J'ai commencé à utiliser un ordinateur assez tôt, donc c'est devenu très vite naturel pour moi de taper sur un clavier. Entourée de beaucoup d'amis qui travaillent en tant que developpeur web et aillant eu un petit cours d'introduction au javascript quand j'étais en faculté de biologie, très vite ma curiosité a été piquée et j'ai donc décidé de faire mes recherches, puis de commencer une formation pour devenir developpeur web. C'est pour cela que j'ai décidé de suivre ma formation sur Openclassroom qui m'a été conseillé par un ami qui a lui même suivi cette formation. Ce portfolio a pour but de montrer ce que j'ai pu apprendre grâce à ma formation Openclassroom.</p>
          </div>
        </div>
        <div className='lg:flex flex-wrap justify-around mt-5'
            id='mes-travaux'>
          {data.length > 0 ? (
            <>
              {data.map((projet, index) => (
                <Card key={index} projetDetails={projet} />
              ))}
            </>
            ) : (
              <p>Une erreur est survenue lors de l'affichage des logements !</p>
            )}
        </div>
      <Form/>
      <Footer />
  </div>
  
  )
}

export default Home;
                            

                        
        