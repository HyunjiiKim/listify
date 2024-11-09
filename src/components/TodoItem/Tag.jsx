import React from "react";

import './TodoItem.css';

const Tag = ({value}) =>{

    return(
        <React.Fragment>
            <div className='Tag'>
                {value}
            </div>
        </React.Fragment>
    )
}

export default Tag;