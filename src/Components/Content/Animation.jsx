import React, { useState } from 'react';
import { useService } from '../Basket/ServiceContext';
import { MdAddShoppingCart } from 'react-icons/md';
import { BsCartCheckFill } from "react-icons/bs";
import './mainpage.css';

const Animation = () => {
  const { selectService } = useService();
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { src: '/pictures/dryclean.jpeg', name: 'Dry Cleaning' },
    { src: '/pictures/expressLaundry.jpeg', name: 'Express Laundry' },
    { src: '/pictures/ironing.jpeg', name: 'Ironing' },
    { src: '/pictures/linenRemoval.jpeg', name: 'Linen Removal' },
    { src: '/pictures/pressFold.jpeg', name: 'Press and Fold' },
  ];

  const toggleService = (index) => {
    const isSelected = selectedServices.includes(index);
    if (isSelected) {
      setSelectedServices((prevSelected) =>
        prevSelected.filter((selected) => selected !== index)
      );
    } else {
      setSelectedServices((prevSelected) => [...prevSelected, index]);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='animation'>
        {services.map((service, index) => (
          <div key={index} className='grid-item'>
            <div className='image-container'>
              <img
                src={service.src}
                alt={`Service ${index + 1}`}
                onClick={() => {
                  toggleService(index);
                  selectService({ ...service, index });
                }}
              />
              {selectedServices.includes(index) ? (
                <BsCartCheckFill className='cart-icon selected' />
              ) : (
                <MdAddShoppingCart className='cart-icon' />
              )}
            </div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animation;
