import React from "react";
import { useState } from "react";
import Wrapper from "../assets/wrappers/ContactCard";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdEdit, MdDelete } from "react-icons/md";

import { FaPhone } from "react-icons/fa";
import EditContact from "./EditContact";

export default function ContactCard({
  _id,
  firstName,
  lastName,
  companyName,
  email,
  phoneNumber,
  tag,
  location,
}) {
  const { user, deleteContact } = useAppContext();
  const [showForm, setShowForm] = useState(false);

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{firstName.charAt(0)}</div>
        <div className="info">
          <div className="info-top">
            <h5>
              {firstName}
              {lastName}
            </h5>
            <p className={`tag ${tag}`}>{tag}</p>
            <div className="action">
              <span className="action-icon" onClick={() => setShowForm(true)}>
                <MdEdit></MdEdit>
              </span>
              <span className="action-icon" onClick={() => deleteContact(_id)}>
                <MdDelete></MdDelete>
              </span>
            </div>
          </div>
          <div className="info-bottom">{companyName}</div>
        </div>
      </header>
      {showForm && <EditContact onClose={() => setShowForm(false)} />}
      <div className="content">
        <div className="content-center">
          <div>
            <span className="icon">{<MdEmail></MdEmail>}</span>
            <span className="text">{email}</span>
          </div>
          <div>
            <span className="icon">{<FaPhone></FaPhone>}</span>
            <span className="text">{phoneNumber}</span>
          </div>
        </div>
        <div className="content-footer">
          <p> created by {user?.name}</p>
        </div>
      </div>
    </Wrapper>
  );
}
