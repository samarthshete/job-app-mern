 
import Wrapper from "../assets/wrappers/EditContact";
import { FormRow, FormRowSelect, Alert } from "../components";
import { useAppContext } from "../context/appContext";
export default function EditContact({ onClose }) {
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
      <div className="form-popup overlay">
        <div class="modal-content">
          <div className=" close-modal">
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>

          <div className="modal-body">
            <div className="edit-contact-header">
              <h3> Edit Contact </h3>
              <button className="btn btn-block save-btn"> Save</button>
            </div>
            <div className="edit-contact-form">
              <form className="edit-contact-form">
                {showAlert && <Alert />}
                <div className="contact-form-center">
                  <FormRowSelect
                    name="tag"
                    labelText="tag"
                    value={tag}
                    list={tagOptions}
                    handleChange={handleContactInput}
                  ></FormRowSelect>
                  <div className="flex">
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
                  </div>
                  <FormRow
                    type="text"
                    name="companyName"
                    value={companyName}
                    handleChange={handleContactInput}
                  ></FormRow>

                  <div className="flex">
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
                  </div>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
