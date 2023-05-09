import styled from "styled-components";

const Wrapper = styled.article`
  .form-popup {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }

  .form-popup.show {
    display: block;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%;
    max-width: 600px;
    position: relative;
  }
  .edit-contact-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    width: 90%;
    border-bottom: 1px solid #e1edff;
  }
  .close-modal {
    top: 0;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .save-btn {
    width: 65px;
  }
  .edit-contact-form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .flex {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
  }
`;

export default Wrapper;
