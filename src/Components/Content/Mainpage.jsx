import React, { useState } from 'react'
import { RiNotification2Fill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io";
import Offers from './Offers';
import {AnimatePresence, motion} from 'framer-motion'
import Services from './Services';
import Navbar from '../Navbar';
import './mainpage.css'
import Animation from './Animation';

const Mainpage = () => {
const [visible,setvisible] = useState(false)
  return (
    <div className='main'>
      <div className='d-flex p-3 justify-content-between align-items-center'>
        <div className='d-flex'>
         
          <h3 className='text-6'><strong>Dobby{'>'}</strong></h3>
        </div>
        <div>
          <RiNotification2Fill className='mx-3' size={22} onClick={()=>setvisible(!visible)} />
          <BsInfoCircleFill size={22} />
        </div></div>
      <div>
        <Offers />
      </div>
      <div>
        <Animation/>
      </div>
      <AnimatePresence>{visible && (<motion.div style={{
          position: 'absolute',
          width: '20rem',
          height: '30rem',
          borderRadius:'1rem',
          background: '#938568d2',
          display: 'flex',
          flexDirection:'column',
          top: 0,
          left: 0,
          right: 0,
          bottom: '12rem',
          margin: 'auto',
          zIndex: 1,
        }}
        initial={{scale:0,x:50,y:800}}
    animate={{scale:1,x:0,y:50}}
    exit={{scale:0,x:50,y:800}}
    transition={{duration:0.5,type:'spring'}} duration={{Infinity}}>
          <strong><p className='mx-4 mt-3'>Notifications</p></strong>
          <p className='mx-4'>You have 0 messages</p>
      </motion.div>)}</AnimatePresence>
      <div>
        <h2 className='mx-3'>Services</h2>
        <Services />
      </div>
      <div className='container-fluid'>
        <Navbar />
      </div>
    </div>
  )
}

export default Mainpage