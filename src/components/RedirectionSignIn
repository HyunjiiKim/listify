import {useNavigate} from 'react-router-dom';

function RedirectionSignIn(){

    const navigate = useNavigate;
    //Redirection based on loggedin status
    const isLoggedIn = True;

    if(isLoggedIn){
        navigate('../pages/HomePage/HomePage.js');
    }else{
        navigate('../pages/SignIn/SignIn.js');
    }
};

export default RedirectionSignIn;