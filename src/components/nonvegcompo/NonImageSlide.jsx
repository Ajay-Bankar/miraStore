import React from 'react';

const NonImageSlide = () => {
  // Array of image URLs
  const imageUrls = [
    "/images/nonveg image/nonimg1.avif",
    "/images/nonveg image/nonimg2.avif",
    "/images/nonveg image/nonimg3.avif",
    "/images/nonveg image/nonimg4.avif",
    // "/images/nonveg image/nonimg5.avif",
    "/images/nonveg image/nonimg6.avif",
    "/images/nonveg image/nonimg7.avif",
    "/images/nonveg image/nonimg8.avif",
    // "/images/nonveg image/nonimg9.avif",
    // "/images/nonveg image/nonimg10.avif"


  ];

  return (
    <div > 
      <h1 className=' w-11/12'>Select your choice</h1>
    <div className="ml-5 gap-5 flex justify-start sm:justify-start mt-10 mb-10 text-w sm:overflow-x-scroll overflow-x-scroll sm:scroll-smooth scroll-smooth sm:overflow-hidden scrollbar-hidden">
      {imageUrls.map((imageUrl, index) => (
        <img key={index} className='sm:w-[170px] sm:h-[170px] w-[150px] h-[150px]  sm:object-cover sm:rounded-full object-cover rounded-full hover:scale-110 duration-1000' src={imageUrl} alt={''} />
      ))}
    </div>
    </div>
  );
}

export default NonImageSlide;
