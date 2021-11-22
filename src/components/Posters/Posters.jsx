import React, { useState } from 'react';
import './posters.css';
import { images } from './CarouselData';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Posters = () => {

    const [currentImg, setCurrentImg] = useState(0);

    const goLeft = () => {
        if (currentImg === 0) {
            setCurrentImg(images.length - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    };

    const goRight = () => {
        if (currentImg !== images.length - 1) {
            setCurrentImg(currentImg + 1);
        } else {
            setCurrentImg(images.length - (images.length - 1));
        }
    };

    const clickHandler = () => {
        localStorage.setItem("pageData", "Data Retrieved from axios request")
        window.open(images[currentImg].img, "_blank")
    }

    return (
        <div className="slider_container">
            <h1>Choose your poster</h1>
            <div className="posters_slider">
                <AiOutlineArrowLeft className='arrow' onClick={goLeft} />
                <div className="poster_item">
                    <img onClick={clickHandler} src={images[currentImg].img} />
                </div>
                <AiOutlineArrowRight className='arrow' onClick={goRight} />
            </div>
        </div>
    )
}

export default Posters
