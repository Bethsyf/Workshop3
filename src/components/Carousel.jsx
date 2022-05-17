import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1652720214/workshop-sprint3/Card_2x_otogq7.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1652720214/workshop-sprint3/Card_2x_otogq7.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1652720214/workshop-sprint3/Card_2x_otogq7.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselHome;
