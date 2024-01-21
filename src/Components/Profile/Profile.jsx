import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { MdAccountCircle } from "react-icons/md";
import './profile.css'
import { FaUserEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import auth from '../../services/auth'
import {motion} from 'framer-motion'
import Backdrop from './Backdrop';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userProfile,setuserProfile] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.getProfile(dispatch)
    .then((data)=>{
      setuserProfile(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleLogout = ()=>{
    sessionStorage.removeItem('LoggedinUser')
    setuserProfile({})
    dispatch({type:'USER_LOGOUT'})
    navigate('/signin')
  }
  return (
    <div>
       <div className='profile d-flex justify-content-between'>
        <div className='d-flex'>
        <MdAccountCircle size={80} className='mx-2 mt-3'/>
       <div className='mt-4'>
       <h4>{userProfile.name}</h4>
       <p>+91 {userProfile.phone}</p>
       </div>
        </div>
        <FaUserEdit size={24} className='mt-5 mx-4'/>
       </div>
       <div>
       <Backdrop/>
    </div>
    <button onClick={handleLogout}>Logout</button>
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Profile