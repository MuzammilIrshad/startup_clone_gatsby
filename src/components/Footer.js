import React from "react"
import image from '../images/desktop-white.png';
import * as footer from './footer.module.css';
import { Link } from 'gatsby';

export default function Footer() {
    return (
        <div id={footer.footer}>
            <div id={footer.data }>
                <img src={image} />
                <p>Startup Pakistan got you the latest news to have an eye on the Pakistan's Statup Ecosystem. Business keeps you growing if you know about your competitor's moves. 
                Startup Pakistan has Business, Tech, Global Tech, Global, Auto, and Startup News for you straight from the industries all around the Globe.
                    This platform will help you to project the upcoming opportunities not only in Pakistan but Worldwide.</p>
                <p>Contact us: <a href='mailto:startuppakistansp@gmail.com'>startuppakistansp@gmail.com</a></p>
            </div>
        </div>
    );
}