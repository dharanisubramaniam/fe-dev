import React from "react";
import "./Row.css";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";



function Row({img,time, title, students, amount,rating}) {
  const[{updatedTitle},dispatch]=useStateValue()
  const updateTitle=(e)=>{
    // console.log(e.target.nextSibling.children[1].innerHTML);
    dispatch({type:"UPDATE_TITLE",updatedTitle:e.target.nextSibling.children[1].innerHTML})
   }
  
  
  return (
    <Link className="row__link" to="/course">
      <div className="row" onClick={(e)=>updateTitle(e)}>
        <img src={img} className="row__image"></img>
        <div className="row__details">
          <div className="row__time">
            <p className="row__difficultyIcon"></p>
            <span>{time}</span>
          </div>

          <h3>{title}</h3>
          <div className="row__amountDetails">
            <div className="row__rating">
              <StarHalfRoundedIcon className="star" />
              <p>{rating}</p>
            </div>
            <p className="row__studentsDetails">{students} students</p>
            <span className="row__amount">{amount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Row;
