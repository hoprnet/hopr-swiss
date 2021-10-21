import { NextPage } from "next";
import React from "react";
import { ContactUsData } from "../../constants";
import { ALink } from "../atoms/a";
import { Images } from "../atoms/images";

interface ContactUsProps {}

export const ContactUs: NextPage<ContactUsProps> = ({}) => {
  return (
    <div className="contact-us-element">
      {ContactUsData.map((e, i) => (
        <ALink key={i} href={e.link} target={e.target}>
          <div className="contact-us-item">
            <div className="contact-us-image">
              <Images src={e.img} alt={e.label} />
            </div>
            <h6>{e.label}</h6>
          </div>
        </ALink>
      ))}
    </div>
  );
};
