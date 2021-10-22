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
import { Sections } from '../molecules/sections';
import { HoprVideo } from '../molecules/videoHopr';

interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <>
      <Sections sectionName="navbar-section" navbarORfooter={true}>
        <NavBar />
      </Sections>

      <Sections className="video" sectionName="video-section">
        <h1>Changing Data Privacy for Good</h1>
        <HoprVideo />
      </Sections>

      <Sections sectionName="paragraph-section">
        <ParagraphHopr p={paragraphHopr} />
      </Sections>

      <Sections className="background-yellow" sectionName="contact-us-section">
        <h2>CONTACT US</h2>
        <ContactUs />
      </Sections>

      <Sections sectionName="hopr-values-section">
        <h2>OUR HOPR VALUES</h2>
        <OurHoprValues />
      </Sections>

      <Sections
        className="background-blue"
        sectionName="hopr-manifesto-section"
      >
        <h2 className="p-color-white">OUR MANIFESTO</h2>
        <ParagraphHopr p={hoprManifesto} className="p-color-white" />
      </Sections>

      <Sections className="background-yellow" sectionName="partners-section">
        <h2>PARTNERS</h2>
        <Partners />
      </Sections>

      <Sections
        className="background-yellow"
        sectionName="board-of-association-section"
      >
        <h2>BOARD</h2>
        <BoardOfAssociation data={dataBoardAssociation} />

        <h4>Board Committee for Legal Affairs</h4>
        <BoardOfAssociation data={dataCommittee} />
      </Sections>

      <Sections sectionName="team-paragraph-section">
        <div className="team-paragraph">
          <Images
            src="/assets/images/team-paragraph/team-card-with-blue-stroke.png"
            width={390}
            heigh={0}
          />
          <ParagraphHopr p={hoprTeam} />
        </div>
      </Sections>

      <Sections
        className="background-yellow"
        sectionName="people-building-section"
      >
        <h2>PEOPLE BUILDING THE HOPR NETWORK</h2>
        <PeopleBuildingHopr data={dataPeopleBuildingHopr} />
      </Sections>

      <Sections sectionName="addreses-section">
        <h2>Addresses</h2>
        <div className="team-paragraph">
          <ParagraphHopr p={addres1} />
          <ParagraphHopr p={addres2} />
        </div>
      </Sections>

      <Sections sectionName="footer-section" navbarORfooter={true}>
        <Footer />
      </Sections>
    </>
  );
};

export default Home;
