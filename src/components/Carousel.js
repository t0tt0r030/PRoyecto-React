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
                <img src= "./imagenes/torta1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/1.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/2.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/3.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src= "./imagenes/4.jpg"/>
            </SwiperSlide>
          </Swiper>

    );
}




export default Carousel;