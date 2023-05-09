import React, { useEffect } from "react";

import Wrapper from "../assets/wrappers/ContactContainer";
import { useAppContext } from "../context/appContext";
import Alert from "./Alert";
import ContactCard from "./ContactCard";
import Loading from "./Loading";
export default function ContactContainer() {
  const { isLoading, showAlert, Contact, getContacts, totalContacts  } =
    useAppContext();

  useEffect(() => {
    // eslint-disable-next-line
    getContacts();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (Contact.length === 0) {
    return (
      <Wrapper>
        <h2>No contact to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {showAlert && <Alert />}
     
      <h2> Contact Container</h2>
      <h5>
        {totalContacts } contact{Contact.length > 1 && "s"} found
      </h5>
      <div className="contact">
        {Contact.map((contact) => {
          return <ContactCard key={contact._id} {...contact} />;
        })}
      </div>
    </Wrapper>
  );
}
