import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <section className="Footer">
      <div className=" paddings innerWidth footer-content">
        <div className="flexColStart left-f">
          <img src="./logo2.png" alt="logo2" />
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>
        <div className=" flexColEnd right-f">
          <span className="primaryText ">Information</span>
          <span className=" secondaryText ">145 New York, FL 5467, USA</span>
          <div className="info">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
