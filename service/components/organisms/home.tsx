import { NextPage } from "next";
import React from "react";
import { ContactUs } from "../molecules/contactUs";
import { NavBar } from "../molecules/navBar";
import { OurHoprValues } from "../molecules/ourHoprValues";
import { ParagraphHopr } from "../molecules/paragraph";
import { HoprVideo } from "../molecules/videoHopr";

interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <>
      <NavBar />

      <section className="section video" id="section-video">
        <div className="container">
          <h1>Changing Data Privacy for Good</h1>
        </div>
        <HoprVideo />
      </section>

      <section className="section padding-sections" id="section-paragraph">
        <div className="container">
          <ParagraphHopr />
        </div>
      </section>

      <section
        className="section background-yellow padding-sections"
        id="section-contact-us"
      >
        <div className="container">
          <h2>CONTACT US</h2>
          <ContactUs />
        </div>
      </section>

      <section className="section padding-sections">
        <div className="container">
          <h2>OUR HOPR VALUES</h2>
          <OurHoprValues />
        </div>
      </section>
    </>
  );
};

export default Home;
