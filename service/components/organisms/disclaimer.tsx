import { NextPage } from 'next';
import React from 'react';
import { disclaimerParagraph } from '../../constants/disclaimer';
import { Footer } from '../molecules/footer';
import { NavBar } from '../molecules/navBar';
import { ParagraphHopr } from '../molecules/paragraph';
import { Sections } from '../molecules/sections';

interface DisclaimerProps {}

const Disclaimer: NextPage<DisclaimerProps> = ({}) => {
  return (
    <>
      <Sections className="navbar single-page">
        <NavBar />
      </Sections>

      <Sections>
        <h2>Disclaimer</h2>
        <ParagraphHopr p={disclaimerParagraph} className="p-align-left" />
      </Sections>

      <Sections className="footer background-gradient-blue">
        <Footer />
      </Sections>
    </>
  );
};

export default Disclaimer;
