import React from "react";
import '../index.css';
import * as Icon from 'react-bootstrap-icons';

const Searchbar = () => {
    return(
        <div className="Search">
            <Icon.Search size='1rem;'/>
            <input type='text'/>
        </div>
    )
};

export default Searchbar;
