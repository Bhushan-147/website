import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// ✅ Local image imports
import fashionImg from '../assets/fashion.png';
import businessImg from '../assets/business.png';
import modelImg from '../assets/model.png';

const Slider = () => {
  const slides = [
    { id: 1, url: fashionImg, title: 'Fashion' },
    { id: 2, url: businessImg, title: 'Business' },
    { id: 3, url: modelImg, title: 'Modelling' },
  ];

  return (
    <div className="w-full max-w-4x2 h-full max-h-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
