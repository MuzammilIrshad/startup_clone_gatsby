import React from "react"
import * as layoutStyles from './layout.module.css';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function LayOut(props) {
    return (
        <div className={layoutStyles.container}>
            <Navbar/>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer/>

        </div>
    );
}