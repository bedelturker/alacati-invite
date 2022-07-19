import React, { useState, useEffect } from 'react';

// Helpful Functions
import capitalize from '../../../utils/capitalize'

const InviteeWelcome = () => {
    const [inviteeFullName, setInviteeFullName] = useState("");

    const location = window.location;
    const queryParams = new URLSearchParams(location.search);

    const getFullName = (firstName, lastName) => {
        // If the there is first name
        if (firstName?.length > 0) {
            // If there is a first and last name
            if (lastName?.length > 0) {
                setInviteeFullName(firstName + " " + lastName);
            } 
            // If there is a first name but no last name
            else {
                setInviteeFullName(firstName)
            }
        } else {
            // If there is a last name but no first name
            if (lastName?.length > 0) {
                setInviteeFullName(lastName)
            } 
            // If there is no first or last name
            else {
                setInviteeFullName("")
            }
        }
    }

    useEffect(() => {
        let firstName = capitalize(queryParams.get("first") || "");
        let lastName = capitalize(queryParams.get("last") || "")

        getFullName(firstName, lastName);

        console.log(inviteeFullName)
    }, [location])


    if (inviteeFullName.length < 1) {
        return (
            <div className="invisible"></div>
        )
    } else {
        return (
            <div className="invite_welcome">
                <span>Dear <span className="invite_welcome_name">{inviteeFullName}</span>,</span>
            </div>
        )}
    }

export default InviteeWelcome
