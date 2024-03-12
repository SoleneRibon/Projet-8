import React from 'react';
import '../input.css';
import '../Page/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Booki from '../assets/Booki.webp';
import SophieBluel from '../assets/Sophie-Bluel.webp';
import Nina from '../assets/Nina-Carducci.webp';
import Kasa from '../assets/Kasa.webp';
import Grimoire from '../assets/Mon-vieux-grimoire.webp';
import Form from '../components/Form';




function Home()  {
  return (
  <>
      <Header />
        <div className='bg-orange-600 p-5 font-roboto text-white'>
          <h2 id='à-propos' className='font-semibold text-2xl flex justify-center mb-5'>À propos</h2>
          <p className=''>Bonjour je suis Solène! Passionée par le developpement je me suis dirigée vers une formation de developpeur Web avec Openclassroom. Voici donc les projets que j'ai pu réaliser.</p>
        </div>
        <div id='mes-travaux'>
            <Card image={Booki} alt={"booki"} titre={"Booki"}/>
            <Card image={SophieBluel} alt={"Sophie Bluel"} titre={"Sophie Bluel"}/>
            <Card image={Nina} alt={"Nina Carducci"} titre={"Nina Carducci"}/>
            <Card image={Kasa} alt={"Kasa"} titre={"Kasa"}/>
            <Card image={Grimoire} alt={"Mon vieux grimoire"} titre={"Mon vieux grimoire"}/>
        </div>
      <Form/>
      <Footer />
  </>
  )
}

export default Home;