import React from 'react'
import './mainpage.css'
import { Carousel } from 'react-bootstrap';

const Offers = () => {
  return (
<div className='d-flex justify-content-center mt-2 mx-2'>
      <Carousel
        interval={3000}
        controls={false}
        indicators={false}
        pause={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 offers img-fluid rounded-5 p-2"
            src="src/Components/Content/pictures/offer1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer2.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer3.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer6.png"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer7.png"
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid offers rounded-5 p-2"
            src="src/Components/Content/pictures/offer8.png"
            alt="Eight slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Offers