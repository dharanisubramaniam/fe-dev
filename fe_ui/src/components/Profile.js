import React from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import img from "../images/JohnDoe.jfif";
import { Avatar } from '@material-ui/core';

function Profile() {
    return (
        <div className="profile">
           <div className="profile__firstHalf">
               <div className="profile__imageContainer">
               <Avatar alt="John Doe" src={img} className="profile__avatar"/>
                <div className="profile__imageContainerDiv">
                    <p>John Doe</p>
                    <span>Designation</span>
                </div>
                  {/* <Link>
                  Back
                  </Link> */}
               </div>
               
           </div>
           <div className="profile__secondHalf">
                   <div className="profile__details">
                  <div className="profile__detailsDiv">
                      <p>FirstName</p>
                      <span>John</span>
                  </div>
                  <div className="profile__detailsDiv">
                      <p>LastName</p>
                      <span>Doe</span>
                  </div>
                  <div className="profile__detailsDiv">
                      <p>Email</p>
                      <span>johndoe123@gmail.com</span>
                  </div>
                  <div className="profile__detailsDiv">
                      <p>Phone</p>
                      <span>123456789</span>
                  </div>
                  <div className="profile__detailsDiv">
                      <p>Password</p>
                      <span>John123</span>
                  </div>
                  </div>
               </div>
           
        </div>
    )
}

export default Profile
