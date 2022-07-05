import React, { useState } from "react"
import { doc, setDoc, Timestamp, getFirestore } from "firebase/firestore"
import db from "../components/firebase"


export default function Home() {

  // Defining the invite response object
  const [inviteResponse, setInviteResponse] = useState({
    dateCreated: Timestamp.fromDate(new Date()),
    guest : {
      firstName: "Bedel",
      lastName: "Türker"
    },
    notes: "Vejeteryanız.",
    hasPlusOne: true,
    plusOne : {
      firstName: "Ayşe",
      lastName: "Obalı"
    },
    willAttend: true,
})

  const rsvpTitle = `${inviteResponse.guest.firstName} ${inviteResponse.guest.lastName}\ 
  - ${inviteResponse.hasPlusOne ? 2 : 1} Guests`

  const addInvite = async () => {
    // Add a new form in rsvp collection
    await setDoc(doc(db, "rsvp", rsvpTitle), inviteResponse)
    .then(res => console.log('res'))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>This is a form</h1>
      <h5>Some text</h5>
      <button type="submit" className="btn btn-primary" onClick={addInvite}>
        Add Bedel to List
      </button>
    </div>
  )
}