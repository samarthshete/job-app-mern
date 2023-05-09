import styled from "styled-components";

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
    gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-radius: 1rem;
    background-color: #ffffff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .search {
    display: grid;

    width: 100%;
    grid-template-columns: 1fr auto;
  }
  .search-icon{
     
    height: 1.5rem;
    width: 1.5rem;
  }
  input {
    display: block;
    border: none;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
  .select-job-status {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 100%;
    border: none;
    text-transform: capitalize;
    color: #666666;
    transition: all 0.2s ease-in;
    font-weight: lighter;
    outline: none;
    background-color: transparent;
  }
  .select-job-type {
    padding-left: 0.5rem;
    border: none;
    background-color: transparent;
    outline: none;
  }
  .job-status-search {
    display: grid;
  }

  .job-type-search {
    display: grid;
  }
`;

export default Wrapper;
