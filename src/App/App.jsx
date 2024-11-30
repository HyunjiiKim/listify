//import components and CSS file 
import './App.css';

import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';

// import pages
import Home from '../pages/Home/Home.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import MyAccount from '../pages/MyAccount/MyAccount.jsx';
import Register from '../pages/Register/Register.jsx';
import ReinitializePassword from '../pages/ReinitializePassword/ReinitializePassword.jsx';


const App = () =>{
  return(
    <BrowserRouter>
    <div className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/signin'>Sign In</Link>
      <Link to='/myaccount'>My Account</Link>
      <Link to='/register'>Sign Up</Link>
    </div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reinitializepassword" element={<ReinitializePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;