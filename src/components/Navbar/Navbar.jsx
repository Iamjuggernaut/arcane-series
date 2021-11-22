import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaArtstation } from 'react-icons/fa';
import { RiNetflixFill } from 'react-icons/ri';
import { SiRiotgames } from 'react-icons/si';

const Navbar = () => {
    return (
        <div className='nav_wrapper'>
            <div className="nav_container">
                <a href="https://www.artstation.com/search?sort_by=relevance&query=riot%20games" target='_blank'>
                    <FaArtstation id='navicon_arts' />ARTSTATION
                </a>
                <a href="https://www.netflix.com/" target='_blank'>
                    <RiNetflixFill id='navicon_netf' />
                    NETFLIX
                </a>
                <a href="https://www.riotgames.com/" target='_blank'>
                    <SiRiotgames id='navicon_riotg' />
                    RiotGames
                </a>
            </div>
        </div>
    )
}

export default Navbar
