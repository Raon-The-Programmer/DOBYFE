import React, { useState } from 'react';
import { useService } from './ServiceContext';
import { CiCircleRemove } from 'react-icons/ci';
import Navbar from '../Navbar';
import './basket.css';
import { FiShoppingCart } from 'react-icons/fi';

const Basket = () => {
  const { selectedServices, removeService } = useService();

  const [divOptions, setDivOptions] = useState(selectedServices.map(() => ({ gender: '', quantity: '', clothType: '' })));

  const handleRemoveClick = (index) => {
    removeService(index);
    setDivOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const handleGenderChange = (index, selectedGender) => {
    setDivOptions((prevOptions) =>
      prevOptions.map((options, i) => (i === index ? { ...options, gender: selectedGender } : options))
    );
  };

  const handleQuantityChange = (index, selectedQuantity) => {
    setDivOptions((prevOptions) =>
      prevOptions.map((options, i) => (i === index ? { ...options, quantity: selectedQuantity } : options))
    );
  };

  const handleClothTypeChange = (index, selectedClothType) => {
    setDivOptions((prevOptions) =>
      prevOptions.map((options, i) => (i === index ? { ...options, clothType: selectedClothType } : options))
    );
  };

  return (
    <div>
      <Navbar />
      <div className='mx-3 mt-4'>
        <strong>
          <h2>
            My Basket <FiShoppingCart />
          </h2>
        </strong>
        {selectedServices.map((selectedService, index) => (
          <div key={index} className='cart-item'>
            <div className='item-details'>
              <strong>
                <p>{selectedService.name}</p>
              </strong>
              <div className='select-options'>
                <select
                  value={divOptions[index].gender}
                  onChange={(e) => handleGenderChange(index, e.target.value)}
                  placeholder='Gender'
                >
                  <option value='' disabled hidden>
                    Gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                <select
                  value={divOptions[index].quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  placeholder='Quantity'
                >
                  <option value='' disabled hidden>
                    Quantity
                  </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  {/* Add more quantity options if needed */}
                </select>
                <select
                  value={divOptions[index].clothType}
                  onChange={(e) => handleClothTypeChange(index, e.target.value)}
                  placeholder='Cloth Type'
                >
                  {divOptions[index].gender === 'male' ? (
                    <>
                      <option value='pant'>Pant</option>
                      <option value='shirt'>Shirt</option>
                      <option value='trousers'>Trousers</option>
                      <option value='innerwear'>Innerwear</option>
                      <option value='t-shirt'>T-shirt</option>
                      <option value='dhothi'>Dhothi</option>
                    </>
                  ) : divOptions[index].gender === 'female' ? (
                    <>
                      <option value='sarees'>Sarees</option>
                      <option value='chudi'>Chudi</option>
                      <option value='shirt'>Shirt</option>
                      <option value='pant'>Pant</option>
                      <option value='lehenga'>Lehenga</option>
                      <option value='innerwear'>Innerwear</option>
                      <option value='t-shirt'>T-shirt</option>
                    </>
                  ) : null}
                </select>
              </div>
            </div>
            <div className='remove-icon-container'>
              <CiCircleRemove
                className='remove-icon'
                size={20}
                onClick={() => handleRemoveClick(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
