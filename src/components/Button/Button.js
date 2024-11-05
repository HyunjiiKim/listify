import React from "react";
import { cva } from "class-variance-authority";
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
    return(
        <button className={ButtonStyles({intent,size})}>
            {input}
        </button>
    );
};

export default Button;