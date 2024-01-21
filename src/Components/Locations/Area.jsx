// Navbar.js

import React from 'react';

const Navbar = ({ selectedLocation }) => {
 
  const shopData = {
    Tambaram: [
      { name: 'Shop 1', image: 'url_to_shop1_image' },
      { name: 'Shop 2', image: 'url_to_shop2_image' },
      { name: 'Shop 3', image: 'url_to_shop3_image' },
    ],
    Perungudi: [
      { name: 'Shop 4', image: 'url_to_shop4_image' },
      { name: 'Shop 5', image: 'url_to_shop5_image' },
      { name: 'Shop 6', image: 'url_to_shop6_image' },
    ],
    Nungambakkam: [
      { name: 'Shop 7', image: 'url_to_shop7_image' },
      { name: 'Shop 8', image: 'url_to_shop8_image' },
      { name: 'Shop 9', image: 'url_to_shop9_image' },
    ],
    Taramani: [
      { name: 'Shop 10', image: 'url_to_shop10_image' },
      { name: 'Shop 11', image: 'url_to_shop11_image' },
      { name: 'Shop 12', image: 'url_to_shop12_image' },
    ],
    Adayar: [
      { name: 'Shop 13', image: 'url_to_shop13_image' },
      { name: 'Shop 14', image: 'url_to_shop14_image' },
      { name: 'Shop 15', image: 'url_to_shop15_image' },
    ],
  };

  const shops = shopData[selectedLocation] || [];

  return (
    <div>
      <h2>Shops in {selectedLocation}</h2>
      <ul>
        {shops.map((shop, index) => (
          <li key={index}>
            <img src={shop.image} alt={shop.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            {shop.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
