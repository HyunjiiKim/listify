import React from "react";
import { cva } from "class-variance-authority";
import './Button.css';

const ButtonStyles=(cva,'base-button'{
    variants: {
        intent:{
            primary: 'buttonPrimary',
            inactive: 'buttonInactive',
            danger: 'buttonDanger',
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

const Button = ({intent, size, label}) => {

    return(
        <button className={ButtonStyles({intent,size})}>
            {label}
        </button>
    );
};


export default Button;