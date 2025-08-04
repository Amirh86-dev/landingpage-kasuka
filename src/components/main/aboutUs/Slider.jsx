import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "../main.module.css";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

export default class Slider extends Component {
  render() {
    const imagesPath = [];

    for (let index = 0; index < 8; index++) {
      imagesPath[index] = `assets/images/client-${index + 1}.png`;
    }

    console.log(window.innerWidth <= 1400 ? 200 : 0);

    return (
      <div className="swiperWrapper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={
            window.innerWidth <= 1023 ? (window.innerWidth <= 639 ? 2 : 4) : 6
          }
          loop
          autoplay={{ delay: 1500 }}
          className={styled.customSwiper}
          spaceBetween={
            window.innerWidth > 1400 || window.innerWidth <= 1023
              ? window.innerWidth <= 767
                ? window.innerWidth <= 639
                  ? 120
                  : 40
                : 100
              : window.innerWidth <= 1400
              ? 60
              : 0
          }
          loopAdditionalSlides={0}
          dir="rtl"
        >
          {imagesPath.map((imgP, i) => (
            <SwiperSlide key={i}>
              <img className={styled.imgSlide} src={imgP} alt="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
