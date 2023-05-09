import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .contact {
    display: grid;

    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .contact {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1rem; 
    }
  }
`;

export default Wrapper;
