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
      <Sections className="navbar">
        <NavBar />
      </Sections>

      <Sections className="video">
        <h1>Changing Data Privacy for Good</h1>
        <HoprVideo />
      </Sections>

      <Sections className="paragraph-section">
        <ParagraphHopr p={paragraphHopr} />
      </Sections>

      <Sections className="background-yellow">
        <h2>CONTACT US</h2>
        <ContactUs />
      </Sections>

      <Sections>
        <h2>OUR HOPR VALUES</h2>
        <OurHoprValues />
      </Sections>

      <Sections className="background-blue hopr-manifesto-section">
        <h2>OUR MANIFESTO</h2>
        <ParagraphHopr p={hoprManifesto} />
      </Sections>

      <Sections className="background-yellow partners-section">
        <h2>CLIENTS</h2>
        <Partners />
      </Sections>

      <Sections className="background-yellow board-of-association" sectionName="board-section">
        <h2>BOARD OF DIRECTORS</h2>
        <BoardOfAssociation data={dataBoardAssociation} />
        <h2>BOARD COMMITTEE FOR LEGAL AFFAIRS</h2>
        <BoardOfAssociation data={dataCommittee} />
      </Sections>

      <Sections className="team-paragraph">
        <div className="col-2">
          <Images
            src="/assets/images/team-paragraph/team-card-with-blue-stroke.png"
            width={330}
            height={330}
          />
        </div>
        <div className="col-2">
          <ParagraphHopr p={hoprTeam} />
        </div>
      </Sections>

      <Sections className="addresses">
        <h2>ADDRESSES</h2>
        <div className="content-column">
          <div className="col-2">
            <ParagraphHopr p={addres1} />
          </div>
          <div className="col-2">
            <ParagraphHopr p={addres2} />
          </div>
        </div>
      </Sections>

      <Sections className="footer background-gradient-blue">
        <Footer />
      </Sections>
    </>
  );
};

export default Home;
