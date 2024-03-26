import React from 'react';

const NonImageSlide = () => {
  // Array of image URLs
  const imageUrls = [
    "/images/nonveg image/nonimg1.avif",
    "/images/nonveg image/nonimg2.avif",
    "/images/nonveg image/nonimg3.avif",
    "/images/nonveg image/nonimg4.avif",
    "/images/nonveg image/nonimg5.avif",
    "/images/nonveg image/nonimg6.avif",
    "/images/nonveg image/nonimg7.avif",
    "/images/nonveg image/nonimg8.avif",
    "/images/nonveg image/nonimg9.avif",
    "/images/nonveg image/nonimg10.avif"


  ];

  return (
    <div className="ml-5 gap-5 flex justify-start sm:justify-start mt-3 text-w sm:overflow-x-scroll overflow-x-scroll sm:scroll-smooth scroll-smooth sm:overflow-hidden scrollbar-hidden">
      {imageUrls.map((imageUrl, index) => (
        <img key={index} className='w-[170px] h-[250px] object-cover rounded-xl hover:scale-110 duration-1000' src={imageUrl} alt={''} />
      ))}
    </div>
  );
}

export default NonImageSlide;
