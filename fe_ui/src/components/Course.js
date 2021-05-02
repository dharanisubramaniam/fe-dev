import React from "react";
import "./MainBody.css";
import Row from './Row';
import { useStateValue } from "../redux/StateProvider";


function Course() {
   const [{course,updatedCourse},dispatch]=useStateValue()
  
   return ( 
        <div>
            <div className="course__categoryContainer">
                <h3>{updatedCourse}</h3>
                <button>View All</button>
            </div>
            <div className="course__rowsContainer" >
                {course.map((item) => (
                   updatedCourse===item.category && <Row
                        key={item.course_id}
                        img={item.thumbnail}
                        time={item.timing}
                        title={item.title}
                        students={item.noofstudents}
                        amount={item.amount}
                        rating={item.rating}
                        id={item.course_id}
                    />
                ))}
            </div>

        </div>
    )
}

export default Course
