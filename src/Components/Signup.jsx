import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../services/auth'
import './styles/signup.css'

const Signup = () => {
    
    const [email,setemail] = useState('')
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')
    const [phone,setphone] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            phone
        }
        const res = await auth.signUp(user)
        if(res){
            navigate('/signin')
        }
    }
  return (
    <div className='container'>
        <div><strong>Dobby{'>'}</strong></div>
        <div className='d-flex flex-column align-items-center'>
            <h3><strong>Create your account</strong></h3>
            <p>Welcome to Doby! Lets create your account</p>
        </div>
        <div className='Signupform'>
            <form action="submit" onSubmit={handleSubmit} className='innerform'>
                <input className='form-control custom mb-2' type="text" placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)} />
                <input className='form-control custom mb-2' type="name" placeholder='Full Name' required value={name} onChange={(e)=>setname(e.target.value)}/>
                <input className='form-control custom mb-2' type="number" placeholder='Phone Number' required value={phone} onChange={(e)=>setphone(e.target.value)}/>
                <input className='form-control custom mb-2'type="password" placeholder='Password' required value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button className='btn mt-2 classbtn'>Create account</button>
            </form>
        </div>
        <div className='d-flex justify-content-center mt-2'>
                <p className='mt-2'><strong>Have an account?</strong></p>
                <Link to='/signin' className='btn signinF border-0'>Sign in</Link>
            </div>
    </div>
  )
}

export default Signup