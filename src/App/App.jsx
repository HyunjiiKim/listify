//import components and CSS file 
import './App.css';

import { BrowserRouter, Route,Routes } from 'react-router-dom';

// import pages
import Home from '../pages/Home/Home.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import MyAccount from '../pages/MyAccount/MyAccount.jsx';
import Register from '../pages/Register/Register.jsx';
import ReinitializePassword from '../pages/ReinitializePassword/ReinitializePassword.jsx';


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signin">
          <Route path='*' element={<SignIn />}/>
        </Route>
        <Route path="myAccount">
          <Route path='*' element={<MyAccount />}/>
        </Route>
        <Route path="register">
          <Route path='*' element={<SignIn />}/>
        </Route>
        <Route path="register">
          <Route path='*' element={<Register />}/>
        </Route>
        <Route path="reinitializepassword">
          <Route path='*' element={<ReinitializePassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;