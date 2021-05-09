import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { Avatar } from '@material-ui/core';
import img from "../images/JohnDoe.jfif";

function Header() {
  const[{user}]=useStateValue()
  // console.log("user",user);
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <span>FILMY EFFECTS</span>
      </Link>
      <nav className="header__menuContainer">
        <ul className="header__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>

          <li>
            <a href="">Downloads</a>
          </li>

          <li>
            <a href="">Courses</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
      {user?
      (<div className="header__signInContainer">
      <Link className="header__linkIcon" to="/profile">
       <Avatar alt="John Doe"/>
      </Link>
      </div>)
      :(<div className="header__signInContainer">
      <Link className="header__link SignIn" to="/login">
        Sign In
      </Link>
      <Link className="header__link SignUp" to="/register">
        Sign Up
      </Link>
    </div>)}
    </div>
  );
}

export default Header;
