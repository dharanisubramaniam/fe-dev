import React from "react";
import { useStateValue } from "../redux/StateProvider";
import AllCourseRow from "./AllCourseRow";



function AllCourse() {
  const[{category},dispatch]=useStateValue();
    return (
       <div>
                {category.map((item)=>(
                  <AllCourseRow key={item.id} title={item.name} id={item.id}/>
                ))}
           
       </div>
    )
}

export default AllCourse
