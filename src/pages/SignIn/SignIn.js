import React from "react";
import { useState } from "react";
import './SignIn.css';

//import components
import Header from '../../components/Header/Header'
import {InputText} from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignInPage = () => {
    return(
        <React.Fragment>
            < Header/>
            <div className="signInForm">
                <InputText
                    inputType="email"
                    icon="mail"
                    placeholder="E-mail"
                />
                <InputText
                    inputType="password"
                    icon="lock"
                    placeholder="Password"
                />
            </div>
            <Button
                intent='primary'
                size='small'
                label='Sign In'
            />
        </React.Fragment>
    )
};

export default SignInPage;