import React from 'react'
import { RiNotification2Fill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io";
import Offers from './Offers';
import Services from './Services';
import Navbar from '../Navbar';

const Mainpage = () => {

  return (
    <div >
      <div className='d-flex p-3 justify-content-between align-items-center'>
        <div className='d-flex'>
          <IoLogoGoogle size={30} className='mx-2' />
          <h3 className='text-6'><strong>Dobby</strong></h3>
        </div>
        <div>
          <RiNotification2Fill className='mx-3' size={22} />
          <BsInfoCircleFill size={22} />
        </div></div>
      <div>
        <Offers />
      </div>
      <div>
        Dobby Animation
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Mainpage