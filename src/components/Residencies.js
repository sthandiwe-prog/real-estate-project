import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.min.css";
import data from "../utils/slider.json";
import "./Residencies.css";
import { sliderSettings } from "./common";

export default function Residencies() {
  return (
    <section className="Residencies">
      <div className=" innerWidth paddings r-content">
        <div className="flexColStart r-heading">
          <span className="orangeText ">Best Choices</span>
          <span className="primaryText ">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SwiperButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" paddings flexColStart r-card">
                <img src={card.image} alt="home" width="250px" />
                <span className="secondaryText r-price">
                  <span className="dollar-sign">$</span>
                  {card.price}{" "}
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
