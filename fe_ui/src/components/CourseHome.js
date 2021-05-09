import React from "react";
import { useStateValue } from "../redux/StateProvider";
import CourseHome1 from "./CourseHome1";



function CourseHome() {
  const [{ updatedTitle, course }, dispatch] = useStateValue()
  return (
    <div className="coursehome__container">
      {course.map((item) => (
        updatedTitle === item.title && <CourseHome1 key={item.course_id} 
        img={item.thumbnail}
         desc={item.description} 
         thumbnail_desc={item.thumbnail_desc} 
         title={item.title}
         level={item.difficultylevel}
         rating={item.rating}
         timing={item.timing}
         noofstudents={item.noofstudents}
         lesson={item.lessons}
         id={item.course_id}
         categoryid={item.categoryid}/>
      ))}
    </div>
  );
}

export default CourseHome;
