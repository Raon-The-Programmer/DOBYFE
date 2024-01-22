import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { MdAccountCircle } from "react-icons/md";
import './profile.css'
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import auth from '../../services/auth'
import {AnimatePresence, motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [visible,setVisible] = useState(false)
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
        <FaUserEdit size={24} className='mt-5 mx-4' onClick={()=>setVisible(!visible)} />
       </div>
    <button onClick={handleLogout}>Logout</button>
    <AnimatePresence mode='popLayout'>{ visible && (
    <motion.div
    initial={{scale:0,x:50,y:500}}
    animate={{scale:1,x:50,y:50}}
    exit={{scale:0,x:150,y:-210}}
    transition={{duration:0.5,type:'spring'}}
    className='Updateform'
    >
      <form action="submit" method="post" className='input'>
        <div>
        <strong><label htmlFor="Name">Name</label></strong>
          <input className='form-control mb-2' type="text" />
        </div>
        <div>
         <strong><label htmlFor="Phone">Phone</label></strong> 
          <input className='form-control mb-2' type="number" />
        </div>
        <div>
        <strong><label htmlFor="Address">Address</label></strong>
          <input className='form-control' type="text" />
        </div>
        <button type="submit" className='btn mt-4 classbtn'>Update</button>
      </form>
    </motion.div>)}
    </AnimatePresence>
    
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Profile