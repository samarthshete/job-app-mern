import styled from "styled-components";

const Wrapper = styled.nav`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
  }

  @media screen and (max-width: 992px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.1);
    z-index: 999;
    height: 50px;

    .nav-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1rem 0;
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--grey-500);
      font-size: 0.8rem;
      text-transform: uppercase;
      text-decoration: none;
      transition: var(--transition);
    }

    .nav-link:hover {
      color: var(--primary-500);
    }

    .icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--grey-500);
      transition: var(--transition);
    }

    .active {
      color: var(--primary-500);
    }

    .active .icon {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
