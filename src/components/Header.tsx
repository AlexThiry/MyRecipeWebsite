import React, { useState } from 'react';
import './Header.css'; // You can create this CSS file for styling

const images = [
  "src/images/frenchtoast.jpeg",
  "src/images/panckes.jpeg",
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <button onClick={handlePrev}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
