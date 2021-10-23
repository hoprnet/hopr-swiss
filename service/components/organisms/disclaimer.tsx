import { NextPage } from 'next';
import React from 'react';
import { disclaimerParagraph } from '../../constants/disclaimer';
import { Footer } from '../molecules/footer';
import { NavBar } from '../molecules/navBar';
import { ParagraphHopr } from '../molecules/paragraph';

interface DisclaimerProps {}

const Disclaimer: NextPage<DisclaimerProps> = ({}) => {
  return (
    <>
      <NavBar />

      <section
        className="section padding-sections"
        id="section-disclaimer-paragraph"
      >
        <div className="container">
          <h2>Disclaimer</h2>
          <br />
          <ParagraphHopr p={disclaimerParagraph} className="p-align-left" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Disclaimer;
