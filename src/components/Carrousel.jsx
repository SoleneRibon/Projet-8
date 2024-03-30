import { useState } from 'react';
import '../input.css';
import '../components/carrousel.css';
import { ChevronLeft, ChevronRight } from "react-feather";
import { RxDotFilled } from 'react-icons/rx';




function Carrousel({ pictures }) {

    const [currentImage, setCurrentImage] = useState(0);
    const nombreImg = pictures.length;

    const prevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(nombreImg - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    const nextImage = () => {
        if (currentImage === nombreImg - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentImage(slideIndex)
    }



    return (
        <>
            <section className="mt-5">

                {
                    pictures.map((picture, index) => {
                        return (
                            <img key={index} className={`max-w-full max-h-full object-contain ${index === currentImage ? 'carrouselimg actif' : 'carrouselimg'}`} src={picture} alt="" />
                        )
                    })
                }

                {pictures.length > 1 && (
                    <div className="  w-10 h-10  absolute mt-10 top-24 left-16  hover: cursor-pointer hover:text-orange-600 
                                md:top-32
                                xl:top-48">
                        <ChevronLeft onClick={prevImage} size={40} />
                    </div>
                )}
                {pictures.length > 1 && (
                    <div className="w-10 h-10 absolute mt-10 top-24 right-16  hover: cursor-pointer hover:text-orange-600 
                                md:top-32
                                xl:top-48">
                        <ChevronRight onClick={nextImage} size={40} />
                    </div>
                )}

                {pictures.length > 1 && (
                    <div className="flex justify-center mt-2">
                        {pictures.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:text-gray-300 mr-2">
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                )}
            </section>



        </>
    )


}
export default Carrousel;