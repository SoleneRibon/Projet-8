
import Carrousel from './Carrousel.jsx';



function Modal({ closeModal, projetDetails,showModal }) {
    
    const tech = projetDetails.outils.map((outil) => {
        return <li key={outil}><img className="max-h-20 max-w-18 
                                    md:max-h-24
                                    xl:max-h-28"src={outil} alt="" /></li>
    })


    return (
        <>
            <div className={ `overflow-auto fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-900
            p-10 w-4/5 h-[700px] 
            md:text-lg
            xl:text-xl 
            2xl:w-[60%] 2xl:max-w-[2000px] 2xl:h-[80%] 2xl:p-16 transition transition-opacity opacity-0 duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h3 className=' flex justify-center text-orange-500 text-lg font-medium
                md:text-2xl
                lg:text-3xl
                xl:text-4xl
                2xl:text-5xl'>{projetDetails.title}</h3>
                <Carrousel pictures={projetDetails.pictures} />
                <button
                    className='absolute top-1 right-1 w-7 h-7text-slate-100 hover:text-orange-600 '
                    onClick={closeModal}>X</button>
                <div>
                    <h2 className='bg-orange-600 font-roboto text-white mt-5 p-2 rounded-t-lg'>Description</h2>

                    <p className='mt-5 font-roboto'>{projetDetails.description}</p>

                </div>
                <div>
                    <h2 className='bg-orange-600 font-roboto text-white mt-5 p-2 rounded-t-lg'>Technologies utilisées</h2>
                    <ul className='flex flex-row justify-around mt-5 flex-wrap'>{tech}</ul>
                </div>
                <div className=''>
                    <h2 className='bg-orange-600 font-roboto text-white mt-5 p-2 rounded-t-lg'>Lien</h2>
                    <div className='flex justify-center'>
                        <a className="" href={projetDetails.lien}><img className="mt-5 h-14  hover:h-20 hover:w-20 
                                                                                    md:h-16
                                                                                    xl:h-20 xl:hover:h-24 xl:hover:w-24"
                            src={projetDetails.imgLien} alt="" /></a>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Modal;