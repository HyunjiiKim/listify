import React from "react";
import 'SignIn.css';

import Header from '../../components/Header/Header'
import InputText from "../../components/Input/Input";

const SignInPage = () =>{
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
        </React.Fragment>
    );
};

export default SignInPage;