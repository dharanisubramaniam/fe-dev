import React from 'react';
import img from "../images/coursehome.jpg";
import Thumbnail1 from "../images/StudentsWorkThumbnail1.jpg";
import Thumbnail2 from "../images/StudentWorkThumbnail2.jpg";
import Thumbnail3 from "../images/StudentWorkThumbnail3.jpg";
import "./CourseHome.css";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import {Link} from "react-router-dom";

function CourseHome1({img,desc,thumbnail_desc,title}) {
    return (
        <div className="coursehome">
      <Link to="/video">
      <div className="coursehome__thumbnail">
        <img src={img}></img>
        <div className="coursehome__playerDesc">
          <h2>{title}</h2>
          <p>
            {thumbnail_desc}
          </p>

          <a href="#" className="coursehome__playerDescFree">
            Free
          </a>
          <a href="#" className="coursehome__playerDescLink">
            Enroll
          </a>
        </div>
        <div className="coursehome__playIconContainer">
          <PlayCircleFilledRoundedIcon className="coursehome__playerIcon" />
        </div>
      </div>
      </Link>
      <div className="coursehome__description">
        <div className="coursehome__desc1">
          <h3>Description</h3>
          <p>
            {desc}
          </p>
        </div>
        <div className="coursehome__desc2">
          <div className="coursehome__desc2Box">
            <div className="coursehome__desc2Boxes">
              <p className="coursehome__descBoxParagraph">LEVEL</p>
              <p>Intermediate</p>
            </div>
            <div className="coursehome__desc2Boxes">
              <p className="coursehome__descBoxParagraph">LESSONS</p>
              <p>6</p>
            </div>
            <div className="coursehome__desc2Boxes">
              <p className="coursehome__descBoxParagraph">DURATION</p>
              <p>4h 45m</p>
            </div>
            <div className="coursehome__desc2Boxes">
              <p className="coursehome__descBoxParagraph">RATING</p>
              <p>5</p>
            </div>
            <div className="coursehome__desc2Boxes">
              <p className="coursehome__descBoxParagraph">STUDENTS</p>
              <p>1200</p>
            </div>
          </div>
          <div className="coursehome__desc2Enroll">
            <a href="#" className="coursehome__desc2EnrollFree">
              Free
            </a>
            <a href="#" className="coursehome__desc2EnrollLink">
              Enroll
            </a>
          </div>
        </div>
      </div>
      <div className="coursehome__skills">
        <h3>Skills covered</h3>
        <div className="coursehome__skillsCovered">
          <p>AfterEffects</p>
          <p>3D Modelling</p>
          <p>3D Rendering</p>
          <p>Composting</p>
        </div>
      </div>
      <div className="coursehome__courseOverview">
        <h3>Course Overview</h3>
        <div className="coursehome__lessons">
          <div className="coursehome__lesson">
            <p>1. Working 2D layers with 3D space</p>
            <ArrowDropDownIcon />
          </div>
          <div className="coursehome__lesson">
            <p>2. Working with 3D classic renders</p>
            <ArrowDropDownIcon />
          </div>
          <div className="coursehome__lesson">
            <p>3. Introducing cameras</p>
            <ArrowDropDownIcon />
          </div>
          <div className="coursehome__lesson">
            <p>4. Working in the Cinema4D renders</p>
            <ArrowDropDownIcon />
          </div>
          <div className="coursehome__lesson">
            <p>5. Working with Cinema 4D Lite</p>
            <ArrowDropDownIcon />
          </div>
          <div className="coursehome__lesson">
            <p>6. Building a composite of 3D Elements</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className="coursehome__studentsWorks">
        <h3>Student's Works</h3>
        <div className="coursehome__studentsWork">
          <div className="coursehome__studentsWorkRows">
            <img src={Thumbnail1} />
            <p>Michael Jordan</p>
          </div>
          <div className="coursehome__studentsWorkRows">
            <img src={Thumbnail2} />
            <p>Nina Dobrev</p>
          </div>
          <div className="coursehome__studentsWorkRows">
            <img src={Thumbnail3} />
            <p>Rachael</p>
          </div>
        </div>
      </div>
      <div className="coursehome__dotIcons">
        <FiberManualRecordIcon className="coursehome__dotIcon" />
        <FiberManualRecordIcon className="coursehome__dotIcon" />
        <FiberManualRecordIcon className="coursehome__dotIcon" />
        <FiberManualRecordIcon className="coursehome__dotIcon" />
      </div>
      <div className="coursehome__reviews">
        <h3>Reviews</h3>
        <div className="coursehome__review">
          <ChevronLeftRoundedIcon className="coursehome__reviewArrowIcon" />
          <div className="coursehome__reviewRow">
            <div className="coursehome__reviewRowOne">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempus vulputate ullamcorper.
              </p>
              <div className="coursehome__reviewRowStarIconContainer">
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
              </div>
              <h4>Jack and Jill</h4>
            </div>
            <div className="coursehome__middleRow">
              <div className="coursehome__reviewRows">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tempus vulputate ullamcorper.
                </p>
                <div className="coursehome__reviewRowStarIconContainer">
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
                </div>

                <h4>Jack and Jill</h4>
              </div>
              <div className="coursehome__reviewRows">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tempus vulputate ullamcorper.
                </p>
                <div className="coursehome__reviewRowStarIconContainer">
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                  <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
                </div>

                <h4>Jack and Jill</h4>
              </div>
            </div>
            <div className="coursehome__reviewRowThree">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempus vulputate ullamcorper.
              </p>
              <div className="coursehome__reviewRowStarIconContainer">
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
              </div>

              <h4>Jack and Jill</h4>
            </div>
          </div>
          <ChevronRightRoundedIcon className="coursehome__reviewArrowIcon" />
        </div>
      </div>
      <div className="coursehome__FAQ">
        <h3>FAQs</h3>
        <div className="coursehome__FAQContainer">
          <div>
            <p className="coursehome__FAQParagraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="coursehome__FAQParagraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="coursehome__FAQParagraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="coursehome__FAQParagraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="coursehome__FAQParagraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="coursehome__FAQParagraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="coursehome__FAQParagraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="coursehome__FAQParagraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="coursehome__offers">
        <h3>Enroll now with Exclusive Offers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div className="coursehome__offersLink">
          <a href="#" className="coursehome__desc2EnrollFree">
            Free
          </a>
          <a href="#" className="coursehome__desc2EnrollLink">
            Enroll
          </a>
        </div>
      </div>
    </div>

    )
}

export default CourseHome1
