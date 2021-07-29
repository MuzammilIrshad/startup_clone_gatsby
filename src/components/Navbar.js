import React from 'react';
import * as navStyles from './nav.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import logo from '../images/desktop-black.png';

export default function Navbar() {
  
    var mydate = new Date();
    var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    var str = day[mydate.getDay()] + ',' + month[mydate.getMonth()] + ' ' + mydate.getDate() + ',' + mydate.getFullYear();
    console.log(str);
    return (
        <div>
            <nav className={navStyles.nav1}>
                <div className={navStyles.navItems}>
                    <p><span>{str}</span><span>Sign in/Join</span></p>
                    <div>
                    <p>
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaYoutube />
                        </p>
                    </div>
                </div>
               
            </nav>
            <div className={navStyles.logo}>
                <img src={logo}/>
            </div>
            <div className={navStyles.linksBar}>
                <ol>
                    <li>StartUps</li>
                    <li>Business</li>
                    <li>Tech</li>
                    <li>More</li>
                </ol>
            </div>
        </div>
    );
}
