import { useState } from 'react';
import './ImageSlider.css';

const images = [
  "src/images/frenchtoast.jpeg",
  "src/images/panckes.jpeg",
  "src/images/waffles.jpeg",
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const transformStyle = {
    transform: `translateX(-${currentImageIndex * 100}%)`, // Adjust for the number of images
  };

  return (
    <div className="image-slider">
      <div className="image-container" style={transformStyle}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className='btn' onClick={handlePrev}>&lt;</button>
      <button className='btn' onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;