import React from 'react';
import { useState } from 'react';

import './Input.css';

const InputText = ({inputType,placeholder,icon}) => {

    return(
        <div className='InputField'>
             <i
            className={`icon icon-${icon}`}/>
            <input type={inputType}
            placeholder={placeholder}
            className='inputText'/>
        </div>
    );
};


const InputRadio = ({label}) => {
    return(
        <div className='InputField'>
            <input type='checkbox'
            className='inputRadio'
            />
            <p>{label}</p>
        </div>
    );
};

const InputTextLabel = ({label, inputType, placeholder}) => {
    return(
        <div>
            <label htmlFor={label}>{label}</label>
            <input
            type={inputType}
            placeholder={placeholder}
            name={label}
            />
        </div>
    )
};

const InputDate = () =>{
    
    const [date, setDate]= useState('');
    const handleOnchange = (e) =>{
        console.log("updated data:",e.target.value);
        setDate(e.target.value);
    };
 
    return(
        <div>
            <input type='date' value={date} onChange={handleOnchange} />
        </div>
    );
}

export { InputText, InputRadio, InputTextLabel, InputDate };