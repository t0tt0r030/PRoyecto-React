import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Carousel.css';

function Carousel() {
    return (

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            id="main-carousel"  
            className="mySwiper"
          >
            <SwiperSlide>
                <img src= "./imagenes/chocolate.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/frutas.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/manjar.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/mousse.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/vainilla.png"/>
            </SwiperSlide>
          </Swiper>

    );
}




export default Carousel;