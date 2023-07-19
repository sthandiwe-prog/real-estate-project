import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="Hero">
      <div className=" paddings innerWidth  hero-content">
        <div className="hero-left-content">
          <div className="title">
            Discover <br /> Most Suitable <br /> Property
          </div>
          <span className="secondaryText">
            Find a variety of properties that suit you very easilty <br />{" "}
            Forget all difficulties in finding a residence for you
          </span>
          <div className="hero-search">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className=" flexStart hero-numbers">
            <div className="flexColStart">
              <span className="number">
                9,000 <span className="plus-sign">+</span>
              </span>
              <span className="secondaryText">Preminum Product</span>
            </div>
            <div className="flexColStart">
              <span className="number">
                3,000 <span className="plus-sign">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart">
              <span className="number">
                26
                <span className="plus-sign">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right-content">
          <img src="./hero-image.png" alt="hero" width="390px" />
        </div>
      </div>
    </section>
  );
}