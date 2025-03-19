import React from 'react'
import FacultyCard from './Cards/FacultyCard'
import '../styles/Faculty.css'
const FacultyCompo = () => {
  return (
   <>
   <title>Courses</title>
   <div className="faculty mt-5">
   <div className="container-fluid">
    <div className="row">
        <div className="col">
        <h1 className='text-center'>Our Tracks</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
    </div>
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-3 m-2">
        <FacultyCard/>
        </div>
        <div className="col-md-3 m-2">
        <FacultyCard/>
        </div>
        <div className="col-md-3 m-2">
        <FacultyCard/>
        </div>
    </div>
   </div>
   </div>
 
   </>
  )
}

export default FacultyCompo
