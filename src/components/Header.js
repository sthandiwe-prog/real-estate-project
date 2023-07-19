import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <section className="Header">
      <div className="header-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width="150px" />
        <div className="header-menu flexCenter">
          <a href="#residences">Residencies</a>
          <a href="#our-value">Our Value</a>
          <a href="#contact-us">Contact us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">Contact</button>
        </div>
      </div>
    </section>
  );
}
