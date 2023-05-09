import main from "../assets/images/banner.png";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Keep track of all your jobs opportunities, applications, notes,
              contacts, in one single dashboard. Ditch the spreadsheets and
              import from any job search website in a single click!
            </p>
            <div>
              <ul className="features-list">
                <li className="features-list-items">
                  <img
                    src="https://uploads-ssl.webflow.com/635c591378332f38be25d45f/635c591478332f1ef725d52c_Check-Circle-Green.svg"
                    height="48"
                    alt="pill_image"
                    className="feature-list-image"
                  />
                  <h6 className="icon-list-heading"> Add Job</h6>
                </li>
                <li className="features-list-items">
                  <img
                    src="https://uploads-ssl.webflow.com/635c591378332f38be25d45f/635c591478332f1ef725d52c_Check-Circle-Green.svg"
                    height="48"
                    alt="pill_image"
                    className="feature-list-image"
                  />
                  <h6 className="icon-list-heading"> All Jobs</h6>
                </li>
                <li className="features-list-items">
                  <img
                    src="https://uploads-ssl.webflow.com/635c591378332f38be25d45f/635c591478332f1ef725d52c_Check-Circle-Green.svg"
                    height="48"
                    alt="pill_image"
                    className="feature-list-image"
                  />
                  <h6 className="icon-list-heading">Notes</h6>
                </li>
                <li className="features-list-items">
                  <img
                    src="https://uploads-ssl.webflow.com/635c591378332f38be25d45f/635c591478332f1ef725d52c_Check-Circle-Green.svg"
                    height="48"
                    alt="pill_image"
                    className="feature-list-image"
                  />
                  <h6 className="icon-list-heading">contacts</h6>
                </li>
              </ul>
            </div>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
