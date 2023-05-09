import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, Alert } from "../components";
import { useAppContext } from "../context/appContext";

export default function CreateContact() {
  const {
    firstName,
    tag,
    tagOptions,
    lastName,
    phoneNumber,
    companyName,
    email,
    jobTitle,
    location,
    showAlert,
    isLoading,
    displayAlert,
    createContact,
    handleChange,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !companyName || !phoneNumber || !tag) {
      displayAlert();
      return;
    }
    createContact();
  };

  const handleContactInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3> Create Contact </h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRowSelect
            name="tag"
            labelText="tag"
            value={tag}
            list={tagOptions}
            handleChange={handleContactInput}
          ></FormRowSelect>
          <FormRow
            type="text"
            name="firstName"
            value={firstName}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="text"
            name="lastName"
            value={lastName}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="text"
            name="companyName"
            value={companyName}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="text"
            name="JobTitle"
            value={jobTitle}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="text"
            labelText="location"
            name="location"
            value={location}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleContactInput}
          ></FormRow>
          <FormRow
            type="string"
            name="phoneNumber"
            value={phoneNumber}
            handleChange={handleContactInput}
          ></FormRow>
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
