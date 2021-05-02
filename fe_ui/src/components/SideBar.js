import React from "react";
import "./SideBar.css";
import  { useStateValue } from "../redux/StateProvider";


function SideBar() {
  const[{category,allCourse},dispatch]=useStateValue();
  const toggleAllCourse=()=>{
    dispatch({type:"SET_ALLCOURSE",allCourse:true})
  }
  const courseUpdate=(e)=>{
    dispatch({type:"SET_ALLCOURSE",allCourse:false})
    dispatch({type:"UPDATE_COURSE",updatedCourse:e.target.innerHTML})
    
  }
  return (
    <div className="sidebar">
      <div className="sidebar__category all_courses" onClick={()=>{toggleAllCourse()}}>
        <p>ALL COURSES</p>
      </div>
      <button className="sidebar__filterButton">Filters</button>

      <div className="sidebar__category">
        
        {category.map((item) => (
          <p key={item.category_id} onClick={(e)=>{courseUpdate(e)}}>{item.category_name}</p>
        ))}
        
      </div>
    </div>
  );
}

export default SideBar;
