import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ServiceProvider } from './Components/Basket/ServiceContext'; // Import the ServiceProvider
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import Home from './Components/Home';
import Mainpage from './Components/Content/Mainpage';
import ForgotPassword from './Components/Auth/ForgotPasswor';
import ResetPassword from './Components/Auth/ResetPassword';
import Location from './Components/Locations/Location';
import Profile from './Components/Profile/Profile';
import Basket from './Components/Basket/Basket';

function App() {
  return (
    <Router>
      <ServiceProvider> {/* Wrap your Routes with ServiceProvider */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/explore' element={<Mainpage />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
          <Route path='/location' element={<Location />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </ServiceProvider>
    </Router>
  );
}

export default App;
