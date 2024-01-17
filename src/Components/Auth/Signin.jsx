import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../services/auth'
import './styles/signup.css'

const Signin = () => {
  const navigate = useNavigate()
  const [email,setemail]= useState('')
  const [password,setpassword] = useState('')
  const [error,seterror] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const user = {
        password,
        email
      }
      const res = await auth.signIn(user)
      if( await res){navigate('/explore')}
      else{ seterror('Invalid email or password:(')}
    
    }catch(err){
     
      console.log({LoginError:err})
    }

  }
  return (
    <div className='container'>
    <div><strong>Dobby{'>'}</strong></div>
    <div className='d-flex flex-column align-items-center'>
        <h3><strong>Login!</strong></h3>
        <p>Please sign in to continue </p>
    </div>
    <div className='Signinform'>
        <form action="submit" onSubmit={handleSubmit} className='innerform' >
            <input className='form-control custom mb-2' type="email" placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input className='form-control custom ' type="password" placeholder='Password' required value={password} onChange={(e)=>setpassword(e.target.value)}/>
            {error && <div className='text-danger'>{error}</div>}
            <Link to='/forgot' className='btn border-0 d-flex '>Forgot Password</Link>
            <button className='btn mt-2 classbtn'>Login</button>
        </form>
    </div>
    <div className='d-flex justify-content-center mt-2'>
            <p className='mt-2'><strong>Don't have an account?</strong></p>
            <Link to='/signup' className='btn signinF border-0'>Sign up</Link>
        </div>
</div>
  )
}

export default Signin