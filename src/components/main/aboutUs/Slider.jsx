import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "../main.module.css";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

export default class Slider extends Component {
  state = {
    activeIndex: 0,
  };

  render() {
    const imagesPath = [];

    for (let index = 0; index < 8; index++) {
      imagesPath[index] = `assets/images/client-${index + 1}.png`;
    }

    return (
      <div>
        <div className="swiperWrapper">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={6}
            loop
            autoplay={{ delay: 1500 }}
            onSlideChange={swiper=> this.setState({activeIndex: swiper.realIndex})}
            className={styled.customSwiper}
          >
            {imagesPath.map((imgP, i) => (
              <SwiperSlide key={i}>
                <div className={styled.slide}>
                  <img src={imgP} alt="img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}
