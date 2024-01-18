import React from 'react';
import './mainpage.css'


const Services = () => {
    const services = [
        {
          name: 'Clothing',
          id: 1,
          Content: 'Clothing Services',
          image: 'src/Components/Content/clothing.jpg',
        },
        {
       
          name: 'Leather',
          id: 2,
          Content: 'Leather Accessories',
          image: 'src/Components/Content/Leather.jpg',
        },
        {
          name: 'Linen',
          id: 3,
          Content: 'Home Linen',
          image: 'src/Components/Content/HomeLinen.jpg',
        },
        {
          name: 'Furnishing',
          id: 4,
          Content: 'Home Furnishing',
          image: 'src/Components/Content/Furniture.jpg',
        },
        {
          name: 'Service',
          id: 5,
          Content: 'Expert Service',
          image: 'src/Components/Content/ExpertService.jpeg',
        },
      ];
      
      
      
  return (
    <div style={{display:'grid', gridAutoFlow:'column',gridAutoColumns:'50%',overflowX:'auto',overscrollBehaviorInline:'contain',gap:'2rem',padding:'1rem 0rem 1rem 1rem',scrollSnapType:'x',scrollBehavior:'smooth',scrollPaddingInline:'1rem'}}>
      {services.map(service => (
        <div key={service.id} className='media-element'>
          <img
            src={service.image}
            alt={service.Content}
            style={{ borderRadius: '10px' ,width:'150px'}}
          />
          <p >{service.Content}</p>
        </div>
      ))}
    </div>

  
);
};

export default Services