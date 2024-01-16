import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/signup.css'
import auth from '../services/auth'



const ForgotPassword = () => {
  const [email,setemail] = useState('')
  const navigate = useNavigate()
  const handleMail = async(e)=>{
    e.preventDefault()
    try{
      await auth.forgotpassword({email})
      navigate('/signin')
      setemail('')
    }catch(err){
      console.log("Error while sending mail: ",err)
    }
  }
  return (
    <div className='container'>
         <div><strong>Dobby{'>'}</strong></div>
    <div className='d-flex flex-column align-items-center'>
        <h3><strong>Forgot Password?</strong></h3>
        <p className='fontSize'>Don't worry, just send a mail to the <strong>registered</strong> mail id </p>
    </div>
        <form className='p-3 pt-4 d-flex flex-column align-items-center Signupform'action="submit">

            <input className='form-control mb-2 ' value={email} onChange={(e)=>setemail(e.target.value)} type="text" required placeholder='Email..'/>
        </form>
        
      <button onClick={handleMail} className='btn mt-4 classbtn'>Send Mail</button>

    </div>
  )
}

export default ForgotPassword