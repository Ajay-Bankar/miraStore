import React from 'react';

const images = [
  '/images/nonveg image/nonimg2.avif',
  '/images/nonveg image/nonimg3.avif',
  '/images/nonveg image/nonimg4.avif',
  '/images/nonveg image/nonimg5.avif',
  '/images/nonveg image/nonimg3.avif',
  // Add more image URLs here
];

const Marq = () => {
  return (
    <div className="marquee  p-4 flex">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} className="inline-block mr-4 w-[300px] h-[400px] object-cover round" />
      ))}
    </div>
  );
};

export default Marq;
