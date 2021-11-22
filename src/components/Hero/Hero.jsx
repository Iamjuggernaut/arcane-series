import React, { useState } from 'react';
import './hero.css';
import { FaPlay } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Hero = () => {

    const [trailer, setTrailer] = useState(false);
    const showTrailer = () => setTrailer(!trailer);
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="hero_wrapper">
            <div className="hero_content">
                <div className="movie_title">
                    <img src="https://arcane.com/static/arcane-logo-a-1-ff3091e021ded0fcd5528dd5b58683db.png" />
                    <img src="https://arcane.com/static/arcane-logo-r-c5c6e8cc377f92f125e50baf52988a87.png" alt="" />
                    <img src="https://arcane.com/static/arcane-logo-c-22bee96a5cb08a95d70e784a654b963f.png" alt="" />
                    <img src="https://arcane.com/static/arcane-logo-a-2-b34b0493a79fb09b5ca3cff805292c7a.png" alt="" />
                    <img src="https://arcane.com/static/arcane-logo-n-0211d1039331a35ad5f920c41c5b2281.png" alt="" />
                    <img src="https://arcane.com/static/arcane-logo-e-b6eebc01851ef564e164d83901d95e6f.png" alt="" />
                </div>
                <h4>
                    <span>16+</span>
                    <span>2021</span>
                    <span>Season 1</span>
                </h4>
                <p className="description">
                    Set in utopian Piltover and the oppressed underground of <br /> Zaun, the story follows
                    the origins of two iconic League <br /> champions-and the power that will tear them apart.
                </p>
                <div className="buttons">
                    <a href="#" onClick={showTrailer}><FaPlay /> Watch trailer</a>
                    <a href="http://www.netflix.com" target="_blank"><SiNetflix /> Go to Netflix</a>
                </div>
            </div>
            <div className={trailer ? "play_trailer active" : "play_trailer"}>
                <iframe className="trailer"
                    src="https://www.youtube.com/embed/fXmAurh012s"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <AiOutlineCloseCircle className='close_icon' onClick={showTrailer, refreshPage} />
            </div>
        </div>
    )
}

export default Hero
