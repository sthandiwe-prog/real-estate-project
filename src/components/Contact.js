import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="Contact">
      <div className=" flexCenter paddings innerWidth contactContent">
        <div className=" left-c ">
          <div className="headings">
            <span className="orangeText"> Our Contact Us</span>
            <span className="primaryText"> Easy to contact us</span>
            <span className="secondaryText small-text">
              {" "}
              We always ready to help by providijng the best services for you.{" "}
              <br />
              We beleive a good blace to live can make your life better
            </span>
          </div>
          <div className="flexRow">
            {" "}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexSart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call </span>
                    <span className="secondaryText">021 123 143 14</span>
                  </div>
                </div>
                <div className="flexCenter button ">Call Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexSart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat </span>
                    <span className="secondaryText">021 123 143 14</span>
                  </div>
                </div>
                <div className="flexCenter button ">Chat Now</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            {" "}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexSart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call </span>
                    <span className="secondaryText">021 123 143 14</span>
                  </div>
                </div>
                <div className="flexCenter button ">Video Call Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexSart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message </span>
                    <span className="secondaryText">021 123 143 14</span>
                  </div>
                </div>
                <div className="flexCenter button ">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-c">
          <img src="./contact.jpg" alt="contact" />
        </div>
      </div>
    </section>
  );
}
