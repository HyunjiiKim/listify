import React from 'react';
import './input.css';

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

export default InputText;