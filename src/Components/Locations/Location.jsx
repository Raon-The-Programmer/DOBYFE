import React, { useState } from 'react'
import Navbar from '../Navbar'
import { IoLogoGoogle } from 'react-icons/io5'
import Select from "react-dropdown-select";
import Shops from './Shops';

const Location = () => {
  const areas = [
    { 
      value: 1,
      label: "Tambaram"
    },
    {
      value:  2,
      label: "Perungudi"
    },
    {
      value: 3,
      label:"Nungambakkam"
    },
    {
      value:4,
      label:"Taramani"
    },
    {
      value:5,
      label:"Adayar"
    }
  ];
  const [selectedLabel, setSelectedLabel] = useState(null);

  const handleChange = (value) => {
    setSelectedLabel(value[0]?.label || null);
    
  }
  
  return (
    <div>
        <div className='d-flex p-3 mt-3 justify-content-between align-items-center'>
        <div className='d-flex'>
         
          <h3 className='text-6'><strong>Dobby{'>'}</strong></h3>
        </div>
        <div>
        <Select className='rounded-2 ' options={areas} style={{width:'11rem',background:'#bbab8cb7'}} placeholder='Area' onChange={handleChange} />
        </div>
        </div>
        <div>
          <Shops area = {selectedLabel}/>
        </div>
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Location