import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";

function Login() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("password do not match");
    } else {
      const newUser = {
        firstName: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/api/auth", body, config);
        console.log("successfully posted", res.data);
      } catch {
        console.log("failed");
      }
    }
  };
  return (
  <div className="register">
  <div className="register__container">
   <h2>FILMY EFFECTS</h2>
   <p className="register__signupFree">Sign Up for Free</p>
   <div className="register__SignUp">
    {/* <FontAwesomeIcon
      className="register__signUpIcon"
      icon={["fab", "google"]}
    /> */}
    <p>Continue with Google</p>
  </div>
  <div className="register__SignUp">
    {/* <FontAwesomeIcon
      className="register__signUpIcon"
      icon={["fab", "facebook"]}
    /> */}
    <p>Continue with facebook</p>
  </div>
  <p>or</p>
  <p>Sign Up with Email</p>
  <form className="register__form" onSubmit={(e) => onSubmit(e)}>
   
    <div className="register__emailInput">
      <EmailIcon className="register__Icon" />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
    </div>
    <div className="register__passwordInput">
      <LockIcon className="register__Icon" />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
      />
    </div>
    <p className="register__forgotPasswordContainer">
    <Link className="register__forgotPassword">Forgot Password?</Link>
    </p>
    <div className="register__signUpButton">
      <input type="submit" value="SignIn" />
    </div>
    <div className="register__signIn">
      <p>
        Don't have an account?{" "}
        <Link className="register__signInLink" to="/register">
          SignUp
        </Link>
      </p>
    </div>
  </form>
  </div>
</div>
  );
}

export default Login;
