import React from "react";
import { cva } from "class-variance-authority";
import { useState } from "react";
import './Button.css';

const ButtonStyles=(cva,'base-button'{
    variants: {
        intent:{
            primary: 'buttonPrimary',
            hover: 'buttonHover',
            inactive: 'buttonInactive'
            danger: 'buttonDanger'
        },
        size:{
            small:  'buttonSmall',
            medium: 'buttonMedium',
            large: 'buttonLarge',
        },
    },
    defaultVariants:{
        intent:"buttonPrimary",
        size: "buttonMedium",
    },
}
);

const Button = ({intent, size, input}) => {

    //Add a Event when Mouse is Over on BTN
    const Hover (e) =>{
        event.target.style.background=''
    }

    return(
        <button className={ButtonStyles({intent,size})}>
            {input}
        </button>
    );
};


export default Button;