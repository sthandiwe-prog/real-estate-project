import React, { useRef } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
export default function Header() {
  const activeButton = useRef();
  return (
    <section className="Header">
      <div className=" flexCenter paddings innerWidth header-container">
        <img src="./logo.png" alt="logo" width="150px" />
        <OutsideClickHandler
          onOutsideClick={() => {
            activeButton.current.classList.remove("display");
          }}
        >
          <div ref={activeButton} className="flexCenter header-menu">
            <a href="#residences">Residencies</a>
            <a href="#our-value">Our Value</a>
            <a href="#contact-us">Contact us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">Contact</button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon">
          <BiMenuAltRight
            size={35}
            onClick={() => {
              activeButton.current.classList.toggle("display");
            }}
          />
        </div>
      </div>
    </section>
  );
}
