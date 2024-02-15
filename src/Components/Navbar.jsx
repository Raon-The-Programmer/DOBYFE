import React, { useEffect, useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdBasket } from 'react-icons/io';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const navigate = useNavigate();


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    handleNav(tab);
  };

  const handleNav = (tab) => {
    if (tab === 'location') {
      navigate('/location');
    } else if (tab === 'basket') {
      navigate('/basket');
    } else if (tab === 'profile') {
      navigate('/profile');
    } else {
      navigate('/explore');
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-bottom">
      <ul className="navbar w-100 justify-content-around">
        <li className={`nav-item ${selectedTab === 'home' ? 'active' : ''}`}>
          <IoHome size={35} className="nav-link" onClick={() => handleTabClick('home')} />
        </li>
        <li className={`nav-item ${selectedTab === 'location' ? 'active' : ''}`}>
          <FaLocationDot size={35} className="nav-link" onClick={() => handleTabClick('location')} />
        </li>
        <li className={`nav-item ${selectedTab === 'basket' ? 'active' : ''}`}>
          <IoMdBasket size={38} className="nav-link" onClick={() => handleTabClick('basket')} />
        </li>
        <li className={`nav-item ${selectedTab === 'profile' ? 'active' : ''}`}>
          <RiAccountPinCircleFill size={35} className="nav-link" onClick={() => handleTabClick('profile')} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
