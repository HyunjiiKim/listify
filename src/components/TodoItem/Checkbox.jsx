import React from "react";
import { useState } from "react";

import './TodoItem.css';

const Checkbox = () =>{
    
    const [isChecked,setIsChecked] = useState(false)

    return(
        <input type="checkbox" className="checkbox" checked={isChecked}/>
    )
};

 

export default Checkbox;