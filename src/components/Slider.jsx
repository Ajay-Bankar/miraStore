import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className=' mb-2 sm:mb-8 mt-4'>
    <>
      <Swiper 
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=' sm:w-full sm:h-[350px] w-full h-[130px] sm:object-cover object-cover'  src="/images/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='sm:w-full sm:h-[350px] w-full h-[130px] sm:object-cover object-cover' src="/images/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' sm:w-full sm:h-[350px] w-full h-[130px] sm:object-cover object-cover' src="/images/slide3.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='sm:w-full sm:h-[350px] w-full h-[130px] sm:object-cover object-cover' src="/images/slide4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
