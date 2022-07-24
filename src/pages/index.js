import React, { useState, useEffect, useRef } from "react";


// Our Components
import Invite from "../components/Invite/Invite";
import Info from "../components/Info/Info";
import Layout from "../components/Layout/Layout";
import MoreInfo from "../components/MoreInfo/MoreInfo";
import Rsvp from "../components/Rsvp/Rsvp";
import Section from "../components/Section/Section";

// Utils
import MusicBox from "../components/Utils/MusicBox/MusicBox";

export default function Home() {
  const [volumeOn, setVolumeOn] = useState(true);

  return (
    <Layout>
      <MusicBox />
      <Section bgOption={1} sectionId="invite-section">
        <Invite />
      </Section>
      <Section
        bgOption={2}
        bgOpacity={3}
        sectionId="more-details-about-invitation"
      >
        <Info />
      </Section>
      <Section
        bgOption={2}
        bgOpacity={3}
        sectionId="gift-form"
      >
        <MoreInfo />
      </Section>
      <Section bgOption={3} bgOpacity={2} sectionId="invitation-form">
        <Rsvp />
      </Section>
    </Layout>
  );
}
