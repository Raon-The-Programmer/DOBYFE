import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Mainpage from './Components/Mainpage'
import ForgotPassword from './Components/ForgotPasswor'
import ResetPassword from './Components/ResetPassword'

function App() {


  return (
   <Router>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/explore' element={<Mainpage/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
      </Routes>
   
   </Router>
  )
}

export default App
