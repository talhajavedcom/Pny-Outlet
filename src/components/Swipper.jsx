import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swipper() {
  return (
    <>
      <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.postimg.cc/G3kqY3pF/2.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/JhvP3GJq/1.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/vTLhdhKq/3.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/hvqsw62Q/4.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/gJh4gmHP/5.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/NjNNMNjZ/6.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/fbJ80x3y/7.png" alt="slider" style={{"display":"block","width":"100%","height":"100%","objectFit":"cover"}}/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swipper;