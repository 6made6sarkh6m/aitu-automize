import React from 'react'
import CourseItem from '../components/CourseItem';
import '../components/css/Courses.css';

function Cources(){
    return(
        <>
        <div className='courseHeader'>
        <h1>Courses</h1>
        </div>
            <div className='courseItems'>
            <CourseItem></CourseItem>
            <CourseItem></CourseItem>
            <CourseItem></CourseItem>
            </div>
            
        </>
    )
}

export default Cources