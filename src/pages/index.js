import React, { useState, useEffect, useRef } from "react";

// Firebase
import { doc, setDoc, Timestamp, getFirestore } from "firebase/firestore";
import db from "../utils/firebase";

// Our Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Invite from "../components/Invite/Invite";
import Info from "../components/Info/Info";
import Rsvp from "../components/Rsvp/Rsvp";

export default function Home() {
  // Defining the invite response object
  const [inviteResponse, setInviteResponse] = useState({
    dateCreated: Timestamp.fromDate(new Date()),
    guest: {
      firstName: "Bedel",
      lastName: "Türker",
    },
    notes: "Vejeteryanız.",
    hasPlusOne: true,
    willAttend: true,
  });

  const rsvpTitle = `${inviteResponse.guest.firstName} ${
    inviteResponse.guest.lastName
  }\ 
  - ${inviteResponse.hasPlusOne ? 2 : 1} Guests`;

  const addRSVP = async () => {
    // Add a new form in rsvp collection
    await setDoc(doc(db, "rsvp", rsvpTitle), inviteResponse)
      .then((res) => console.log("Yay, see you soon! - Hazal & Gilles"))
      .catch((err) => console.log("Oh no, please try again."));
  };

  // Styling the background
  const [currentSection, setCurrentSection] = useState(1);

  // This is a section, bgNo pair
  const bgOptions = {
    1: 4,
    2: 1,
    3: 1,
    4: 1,
  };

  return (
    <Layout>
      <Section bgOption={5} sectionId="invite-section">
        <Invite />
      </Section>
      <Section
        bgOption={6}
        bgOpacity={3}
        sectionId="more-details-about-invitation"
      >
        <Info />
      </Section>
      <Section bgOption={7} bgOpacity={2} sectionId="invitation-form">
        <Rsvp />
      </Section>
    </Layout>
  );
}
