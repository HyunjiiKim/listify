import React from "react";
import '../index.css';
import Magnify from '../Image/Magnify.png';

const Searchbar = () => {
    return(
        <div className="Search">
            <img src={Magnify} alt='Magnify'/>
            <input type='text'/>
        </div>
    )
};

export default Searchbar;
