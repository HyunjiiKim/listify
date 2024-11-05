import React from "react";
import { useState } from "react";
import 'SignIn.css';

//import components
import Header from '../../components/Header/Header'
import InputText from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignInPage = (e.target.Button) =>{
    return(
        <React.Fragment>
            < Header/>
            <InputText
                inputType='email'
                icon='Mail'
                Placeholder='E-mail'
            />
             <InputText
                inputType='password'
                icon='Lock'
                Placeholder='Password'
            />
            <Button
                intent: 'buttonPrimary'
                size: 'buttonLarge'
                input: 'Sign In'
            />
        </React.Fragment>
    );
};

export default SignInPage;