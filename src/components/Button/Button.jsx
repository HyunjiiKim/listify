import React from "react";
import { cva } from "class-variance-authority";
import './Button.css';

const ButtonStyles=cva('base-button',{
    variants: {
        intent:{
            primary: 'buttonPrimary',
            inactive: 'buttonInactive',
            danger: 'buttonDanger',
            outlineP: 'buttonOutlineP',
            outlineS: 'buttonOutlineS',
        },
        size:{
            small:  'buttonSmall',
            medium: 'buttonMedium',
            large: 'buttonLarge',
        },
    },
    defaultVariants:{
        intent:"primary",
        size: "medium",
    },
});

const Button = ({intent, size, label, onClick}) => {
    const buttonClass= ButtonStyles({intent,size});
    const handleOnChange = (e) =>{
        
    }

    return(
        <button
        className={buttonClass}
        type='submit'
        onClick={onClick}
        >
            {label}
        </button>
    );
};


export default Button;