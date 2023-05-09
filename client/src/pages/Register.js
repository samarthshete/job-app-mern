import { useState, useEffect } from "react";
import { Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert></Alert>}
        {!values.isMember && (
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>

            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )}

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            email
          </label>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
          />
          <label htmlFor="name" className="form-label">
            password
          </label>

          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member"}
          <button type="submit" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
