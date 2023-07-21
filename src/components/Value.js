import React from "react";

import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Value() {
  return (
    <section className="Value">
      <div className=" paddings innerWidth flexCenter v-content">
        <div className=" flexColStart left-content">
          {" "}
          <img src="./value.png" alt="house"></img>{" "}
        </div>
        <div className="flexColStart  right-content">
          {" "}
          <span className="orangeText"> Our Value</span>
          <span className="primaryText"> Value We Give You</span>
          <span className="secondaryText">
            {" "}
            We always ready to help by providijng the best services for you.{" "}
            <br /> We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem key={i} uuid={i} className="accItem">
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText heading">
                        {" "}
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
