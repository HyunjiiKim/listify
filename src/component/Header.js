import React from 'react';

const Header = () => {

    return(
        <div className="Header">
            <h3>Aujourd'hui <img src='../icons/calendar.svg'/></h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

export default Header;