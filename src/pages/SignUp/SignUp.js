import React from "react";

//import components
import { InputRadio, InputTextLabel  } from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignUp = () =>{
    return(
        <div>
            <h2>Personal Information</h2>
            <div>
                <div className="SectionA">
                    <h3>What type of account would you like to create</h3>
                    <InputRadio
                    label='Personal' />
                    <InputRadio
                    label='Business'/>
                </div>
                <div className="SectionB">
                    <InputTextLabel
                    label="First Name"
                    placeholder="First Name"
                    inputType="text"
                    />
                    <InputTextLabel
                    label="Last Name"
                    plceholder="Last Name"
                    inputType="text"
                    />
                    <InputTextLabel
                    label="E-mail"
                    placeholder="E-mail"
                    inputType="email"
                    />
                    <InputTextLabel
                    label="Confirm E-mail"
                    placeholder="E-mail"
                    inputType="email"
                    />
                    <InputTextLabel
                    label="Password"
                    placeholder="Password"
                    inputType="password"
                    />
                </div>
                <div className="SectionC">
                    <h3>How did you hear about us?</h3>
                </div>
            </div>
            <Button
                intent="primary"
                size="small"
                label="Send"
            />
        </div>
    
    )
};

export default SignUp; 