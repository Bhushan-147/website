// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // ✅ Local image imports
// import fashionImg from '../assets/fashion.png';
// import businessImg from '../assets/business.png';
// import modelImg from '../assets/model.png';

// const FullscreenSlider = () => {
//   const slides = [
//     { id: 1, url: fashionImg, title: 'Fashion', description: 'Stay ahead in the latest trends and styles.' },
//     { id: 2, url: businessImg, title: 'Business', description: 'Innovative strategies for business growth and development.' },
//     { id: 3, url: modelImg, title: 'Modeling', description: 'Showcase your talent and beauty to the world.' },
//   ];

//   return (
//     <div className="w-screen h-screen relative">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.url}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white text-3xl px-6 py-4 rounded-xl shadow-lg">
//                 <h2 className="font-bold">{slide.title}</h2>
//                 <p className="text-xl">{slide.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FullscreenSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// ✅ Replace with your actual Agri & Food Tech image paths
import smartFarming from '../assets/model.png';
import foodInnovation from '../assets/business.png';
import sustainability from '../assets/fashion.png';

const FullscreenSlider = () => {
  const slides = [
    {
      id: 1,
      url: smartFarming,
      // title: 'Smart Farming',
      title: 'Model',
      // description: 'Harnessing IoT, AI, and sensors to revolutionize agriculture.',
    },
    {
      id: 2,
      url: foodInnovation,
      // title: 'Food Innovation',
      title: 'Business',
      // description: 'Advancing food safety, quality, and sustainable production.',
    },
    {
      id: 3,
      url: sustainability,
      // title: 'Sustainability',
      title: 'Fashion',
      // description: 'Promoting green practices to protect our planet’s future.',
    },
  ];

  return (
    <div className="w-screen h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white text-3xl px-6 py-4 rounded-xl shadow-lg max-w-[80%]">
                <h2 className="font-bold">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullscreenSlider;
