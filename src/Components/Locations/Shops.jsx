import React from 'react';
import './shop.css'

const Shops = ({ area }) => {
  const shopData = {
    Tambaram: [
      { name: 'Quality Power', image: '/pictures/laundry1.jpeg' },
      { name: 'Laundr O Room', image: '/pictures/laundry2.jpeg' },
      { name: 'Laudy Wash', image: '/pictures/laundry3.jpeg' },
      { name: 'Smart Laundry', image: '/pictures/laundry4.jpeg' },
      { name: 'Thee Washers', image: '/pictures/laundry5.jpeg' },
    ],
    Perungudi: [
      { name: 'Dry Clean House', image: '/pictures/laundry6.jpeg' },
      { name: 'Best Power Laundry', image: '/pictures/laundry7.jpeg' },
      { name: 'Tumbledry', image: '/pictures/laundry8.jpeg' },
      { name: 'Wash Dry', image: '/pictures/laundry9.jpeg' },
      { name: 'hiten', image: '/pictures/laundry10.jpeg' },
    ],
    Nungambakkam: [
      { name: 'White Wagon', image: '/pictures/laundry11.jpeg' },
      { name: 'Laundrex', image: '/pictures/laundry12.jpeg' },
      { name: 'Prime Laundry', image: '/pictures/laundry13.jpeg' },
      { name: 'Western & Modern Laundry', image: '/pictures/laundry14.jpeg' },
      { name: 'Wash Overs', image: '/pictures/laundry15.jpeg' },
      { name: 'Smart Laundry', image: '/pictures/laundry4.jpeg' },
      { name: 'Thee Washers', image: '/pictures/laundry5.jpeg' },
    ],
    Taramani: [
      { name: 'Laundry & Dry Cleaning', image: '/pictures/laundry16.jpeg' },
      { name: 'Laundrex', image: '/pictures/laundry17.jpeg' },
      { name: 'hiten', image: '/pictures/laundry18.jpeg' },
      { name: 'Quality Power Laundry', image: '/pictures/laundry1.jpeg' },
      { name: 'Laundr O Room', image: '/pictures/laundry2.jpeg' },
    ],
    Adayar: [
      { name: 'Laudy Wash', image: '/pictures/laundry3.jpeg' },
      { name: 'Smart Laundry', image: '/pictures/laundry4.jpeg' },
      { name: 'Thee Washers', image: '/pictures/laundry5.jpeg' },
      { name: 'Dry Clean House', image: '/pictures/laundry6.jpeg' },
      { name: 'Power Laundry', image: '/pictures/laundry7.jpeg' },
      { name: 'Laundry & Dry Cleaning', image: '/pictures/laundry16.jpeg' },
      { name: 'Laundrex', image: '/pictures/laundry17.jpeg' },
      { name: 'hiten', image: '/pictures/laundry18.jpeg' },
    ],
  };
  const shops = shopData[area] || [];

  return (
    <div className='mt-3 mx-2 body'>
      {area ? (
        <div>
          <h2 className='mb-3'>Shops in {area}</h2>
          <div className="grid-container">
            {shops.map((shop, index) => (
              <div key={index} className="grid-item">
                <img
                  src={shop.image}
                  alt={shop.name}
                  style={{ minWidth: '100px', maxHeight: '100px' }}
                />
                <p>{shop.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Select an area</h1>
      )}
    </div>
  );
};

export default Shops;
