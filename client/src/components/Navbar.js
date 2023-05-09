import Wrapper from "../assets/wrappers/Navbar";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

import { useState } from "react";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <h3 className="logo-text">Welcome back ,{user?.name}</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
