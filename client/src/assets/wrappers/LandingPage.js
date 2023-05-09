import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 800;
     font: 35px;
     color:  #292d34;;
  }
  p {
    font-size: 15px;
    line-height: 23px;
    padding: 0;
    color: #7c828d;
    font-weight: 400;
  }
  .main-img {
    display: none;
  }
  .features-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    padding-top: 20px;
    padding-left: 0;
  }
  ul {
     
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .features-list-items {
    display: flex;
    align-items: center;
    flex: none;
    margin-top: 0;
    margin-bottom: 24px;
    margin-right: 24px;
  }
  .features-list-image {
    flex: none;
    margin-right: 12px;
  }
  @media screen and (min-width: 992px) {
    .feature-list-image {
      width: 24px;
    }
    .features-list {
      align-items: center;
    }
  }
  h6 {
    letter-spacing: 1px;

    margin-top: 0;
  }
  .icon-list-heading {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    margin-left: 12px;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
  .logo{
    width:200px;
    
  }
`;
export default Wrapper;
