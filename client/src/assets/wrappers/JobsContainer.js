import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
     
  }
  .sort{
    margin-right: 1.25rem;
  }
  .sort-options {
    border: none;
    background-color: var(--grey-100);
    font-size: medium;
    text-transform: capitalize;
  }
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
