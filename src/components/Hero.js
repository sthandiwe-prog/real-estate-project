import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion/dist/framer-motion";
export default function Hero() {
  return (
    <section className="Hero">
      <div className=" paddings innerWidth  hero-content">
        <div className="hero-left-content">
          <motion.div
            initial={{ y: "32px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "linear" }}
            className="title"
          >
            Discover <br /> Most Suitable <br /> Property
          </motion.div>
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
                <CountUp start={8780} end={9000} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />{" "}
                      <span className="plus-sign">+</span>
                    </div>
                  )}
                </CountUp>
              </span>
              <span className="secondaryText">Preminum Product</span>
            </div>
            <div className="flexColStart">
              <span className="number">
                <CountUp start={2780} end={3000} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />{" "}
                      <span className="plus-sign">+</span>
                    </div>
                  )}
                </CountUp>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart">
              <span className="number">
                <CountUp start={0} end={26} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />{" "}
                      <span className="plus-sign">+</span>
                    </div>
                  )}
                </CountUp>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "32px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "linear" }}
          className="hero-right-content"
        >
          <img src="./hero-image.png" alt="hero" width="390px" />
        </motion.div>
      </div>
    </section>
  );
}
