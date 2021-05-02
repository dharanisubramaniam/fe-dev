import React from "react";
import { useStateValue } from "../redux/StateProvider";
import AllCourseRow from "./AllCourseRow";



function AllCourse() {
  const[{category},dispatch]=useStateValue();
    return (
       <div>
                {category.map((item)=>(
                  <AllCourseRow key={item.category_id} title={item.category_name} id={item.category_id}/>
                ))}
           
       </div>
    )
}

export default AllCourse
