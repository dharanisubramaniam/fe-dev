import React from "react";
import "./MainBody.css";
import AllCourse from "./AllCourse";
import Course from "./Course";
import { useStateValue } from "../redux/StateProvider";


function MainBody() {
  const[{allCourse,updatedCourse},dispatch]=useStateValue();
 
  return (
    <div className="mainbody">
      {allCourse?<AllCourse/>:updatedCourse?<Course/>:<AllCourse/>}
    </div>
  );
}

export default MainBody;
