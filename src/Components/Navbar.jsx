import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdBasket } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
import './Nav.css'

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className={selectedTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>
        <IoHome size={35} />
        </li>
        <li className={selectedTab === 'location' ? 'active' : ''} onClick={() => handleTabClick('location')}>
        <FaLocationDot size={35} />
        </li>
        <li className={selectedTab === 'basket' ? 'active' : ''} onClick={() => handleTabClick('basket')}>
        <IoMdBasket size={35} />
        </li>
        <li className={selectedTab === 'profile' ? 'active' : ''} onClick={() => handleTabClick('profile')}>
        <RiAccountPinCircleFill size={35}/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
