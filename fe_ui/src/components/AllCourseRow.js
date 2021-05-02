import React from 'react';
import { useStateValue } from '../redux/StateProvider';
import "./MainBody.css";
import Row from './Row';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Carousel from 'react-elastic-carousel'



function AllCourseRow({id,title}) {
    const[{course},dispatch]=useStateValue();
    return (
        <div>
           <div className="course__categoryContainer">
                <h3>{title}</h3>
                <button>View All</button>
            </div>
            <div className="allcourse__rowsContainer">
                <Carousel itemsToShow={3}>
               {course.map((item) => (
                   id===item.category_id && <Row
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
               </Carousel>
           </div>
        </div>
    )
}

export default AllCourseRow
