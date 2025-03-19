import React from 'react'
import CourseCards from './Cards/CourseCards'
import '../styles/CoursesStyle.css'
const Course = () => {
  return (
   <>
   <title>Courses</title>
   <div className="courses">
   <div className="container-fluid mt-5">
    <div className="row">
        <div className="col">
        <h1 className='text-center'>Our Tracks</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
    </div>
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-3 m-2">
        <CourseCards/>
        </div>
        <div className="col-md-3 m-2">
        <CourseCards/>
        </div>
        <div className="col-md-3 m-2">
        <CourseCards/>
        </div>
    </div>
   </div>
   </div>
 
   </>
  )
}

export default Course
