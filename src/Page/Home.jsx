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
      <section>
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
        </section>
        <section className='bg-[#AC6FC6] text-white pt-5'>
          <h2 className='flex justify-center font-semibold text-2xl
                        md:text-3xl '>Mes compétences</h2>
            <div className='flex  flex-col
                            xl:flex-row  xl:pb-10'>
              <div className=' flex justify-center flex-col border-2 w-[80%] m-auto mt-5 p-2
                            xl:max-w-[30%] xl:h-[350px]'>
                <h3 className='flex justify-center text-xl font-semibold p-2
                              md:text-2xl'>Frontend</h3>
                <p className='text-center'>Développer et intégrer un site web frontend.</p>
                <h3 className='flex justify-center text-xl font-semibold p-2
                              md:text-2xl'>Outils utilisés</h3>
                <ul className='p-2 grid grid-cols-2 gap-4 '>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>HTML</li>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>Javascript</li>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>React</li>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>SASS</li>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>CSS</li>
                    <li className=' p-2 rounded-full flex justify-center bg-white text-[#6C3483] '>Tailwind</li>
                </ul>
              </div>
              <div className='flex justify-center flex-col border-2 w-[80%] m-auto mt-5 p-2
                              xl:max-w-[30%] xl:h-[350px]' >
                <h3 className='flex justify-center text-xl font-semibold p-2
                              md:text-2xl'>Backend</h3>
                <p className='text-center'>Créer un serveur express et le lier à une base de données de manière sécurisée. Ainsi que mettre en oeuvre des opérations CRUD.</p>
                <h3 className='flex justify-center text-xl font-medium p-2
                              md:text-2xl'>Outils utilisés</h3>
                <ul className='p-2 grid grid-cols-2 gap-4 '>
                  <li className=' p-2  rounded-full flex justify-center bg-white text-[#6C3483] '>NodeJS</li>
                  <li className=' p-2  rounded-full flex justify-center bg-white text-[#6C3483] '>Express</li>
                  <li className=' p-2  rounded-full flex justify-center bg-white text-[#6C3483] '>MongoDB</li>
                  <li className=' p-2  rounded-full flex justify-center bg-white text-[#6C3483] '>API Rest</li>
                </ul>
                
              </div>
              <div className='flex justify-center flex-col border-2 w-[80%] m-auto mt-5 p-2 mb-10
                              xl:max-w-[30%] xl:h-[350px]'>
                <h3 className='flex justify-center text-xl font-semibold p-2
                              md:text-2xl'>Softskills</h3>
                <ul className='list-disc flex flex-col justify-center mb-5'>
                  <li className='ml-[20%] 
                                md: ml-[30%]
                                lg: ml-[35%]
                                xl: ml-[10%]'>Maitrise des méthodes agiles</li>
                  <li className='ml-[20%] 
                                md: ml-[30%]
                                lg: ml-[35%]
                                xl: ml-[10%]'>Mise en place de veilles technologiques</li>
                  <li className='ml-[20%] 
                                md: ml-[30%]
                                lg: ml-[35%]
                                xl: ml-[10%]'>Optimisation du SEO</li>
                </ul>
              </div>
            </div>
        </section>
        <div className='lg:flex flex-wrap justify-around mt-5'
            id='mes-travaux'>
          {data.length > 0 ? (
            <>
              {data.map((projet, index) => (
                <Card key={index} projetDetails={projet} />
              ))}
            </>
            ) : (
              <p>Une erreur est survenue lors de l'affichage des projets!</p>
            )}
        </div>
      <Form/>
      <Footer />
  </div>
  
  )
}

export default Home;  
                        
                
                    
            
         
           
            
          
                            

                        
        