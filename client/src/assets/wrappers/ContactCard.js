import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #808000;
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 1rem;
  }
  .info {
    display: grid;
    grid-template-rows: auto auto;
    gap: 0.5rem;
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .info-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .info-bottom {
    display: flex;
    align-items: center;
  }

  .tag {
    letter-spacing: var(--letterSpacing);
    background: #e1edff;
    border-radius: 15px;
    color: #ff0000;
    width: 100px;
    height: 30px;
    text-align: center;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    margin-top: 0.5rem;
    display: grid;
    row-gap: 0.5rem;
  }
  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    svg {
      color: var(--grey-400);
    }
  }
  .action-icon {
    font-size: 1rem;

    svg {
      color: var(--grey-900);
    }
  }
  .content-footer {
    margin-top: 1rem;
    p {
      margin: 0;
      display: block;
      min-height: 1px;
      position: relative;
      font-weight: 300;
      text-align: right;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  @media (min-width: 992px) {
    .contact {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .mymodal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
}

.myoverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}
`;

export default Wrapper;
