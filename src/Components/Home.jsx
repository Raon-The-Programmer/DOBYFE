import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import './Home.css'; 

const Home = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <div>
      {loading ? <div className='loader d-flex flex-column align-items-center justify-content-center'>
      <div className='mb-4'>
        <Triangle
          visible={loading}
          height="80"
          width="80"
          color="black"
          ariaLabel="triangle-loading"
          wrapperClass="triangle"
        />
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,ease:'easeIn'}}>
        <h2 style={{fontWeight:'bolder'}}>DOBBY</h2>
      </motion.div>
      <motion.div style={{marginTop:'2px'}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:'1',delay:1}}>
       <p style={{fontFamily:'monospace'}}>Laundry Today / Naked Tommorow</p>
      </motion.div>
    </div> : navigate('/signup') }
    </div>
  );
};

export default Home;