import React, { useEffect, useState } from "react";
import "./Carousel.css";
const CarouselComp = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handelNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("next is clicked");
  };
  const handelPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("previs clicked");
  };

  useEffect(() => {
    const imageInterval = setInterval(() => {
      handelNext();
    }, 5000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [currentIndex]);

  return (
    <div className="landing-section">
      <div className="row container">
        <button className="btn btn-primary button" onClick={handelPrevious}>
          Previous
        </button>
        <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
        <button className="btn btn-primary button" onClick={handelNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselComp;
