import { NextPage } from 'next';
import React from 'react';
import {
  addres1,
  addres2,
  dataBoardAssociation,
  dataCommittee,
  dataPeopleBuildingHopr,
  hoprManifesto,
  hoprTeam,
  paragraphHopr,
} from '../../constants/home';
import { Images } from '../atoms/images';
import { BoardOfAssociation } from '../molecules/boardOfAssociation';
import { ContactUs } from '../molecules/contactUs';
import { Footer } from '../molecules/footer';
import { NavBar } from '../molecules/navBar';
import { OurHoprValues } from '../molecules/ourHoprValues';
import { ParagraphHopr } from '../molecules/paragraph';
import { Partners } from '../molecules/partners';
import { PeopleBuildingHopr } from '../molecules/peopleBuildingHopr';
import { HoprVideo } from '../molecules/videoHopr';

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
          <ParagraphHopr p={paragraphHopr} />
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

      <section className="section padding-sections" id="section-hopr-values">
        <div className="container">
          <h2>OUR HOPR VALUES</h2>
          <OurHoprValues />
        </div>
      </section>

      <section
        className="section padding-sections background-blue"
        id="section-hopr-manifesto"
      >
        <div className="container">
          <h2 className="p-color-white">OUR MANIFESTO</h2>
          <ParagraphHopr p={hoprManifesto} className="p-color-white" />
        </div>
      </section>

      <section
        className="section padding-sections background-yellow"
        id="section-partners"
      >
        <div className="container">
          <h2>PARTNERS</h2>
          <Partners />
        </div>
      </section>

      <section
        className="section padding-sections background-yellow"
        id="section-board-of-association"
      >
        <div className="container">
          <h2>BOARD OF ASSOCIATION</h2>
          <BoardOfAssociation data={dataBoardAssociation} />

          <h4>Board Committee for Legal Affairs</h4>
          <BoardOfAssociation data={dataCommittee} />
        </div>
      </section>

      <section className="section padding-sections" id="section-team-paragraph">
        <div className="container">
          <h2>Team</h2>
          <div className="team-paragraph">
            <Images src="/assets/images/team-paragraph/team-card-with-blue-stroke.png" />
            <ParagraphHopr p={hoprTeam} />
          </div>
        </div>
      </section>

      <section
        className="section padding-sections background-yellow"
        id="section-people-building"
      >
        <div className="container">
          <h2>PEOPLE BUILDING THE HOPR NETWORK</h2>
          <PeopleBuildingHopr data={dataPeopleBuildingHopr} />
        </div>
      </section>

      <section className="section padding-sections" id="section-addreses">
        <div className="container">
          <h2>Addresses</h2>
          <div className="team-paragraph">
            <ParagraphHopr p={addres1} />
            <ParagraphHopr p={addres2} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
