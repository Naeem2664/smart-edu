import React from "react";
import { GirlLearner } from "../../assets/Images/Images";
import "../../styles/CourseCard-Style.css";
import { FaLinkedin ,FaInstagram } from "react-icons/fa";
const CourseCards = () => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={GirlLearner} alt="course-image" className="" />
        </div>
        <div className="card-body w-100 p-0">
          <div className="pt-3">
            <h6 style={{ textAlign: "left",marginBottom: "0px" }}>Dr. John Doe</h6>
            <pre style={{ textAlign: "left",color: "greay", fontSize: "10px" }}>Professor at KFUEIT</pre>
          </div>
          <p style={{ textAlign: "left", color: "gray", fontSize: "10px" }}>
            lorem ipsum dolor sit amet, consectetur adipisicing elit? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            perspiciatis?
          </p>
        </div>
        <div className="d-flex w-100 justify-content-between"> 
          <div className="dept float-left">
            <p style={
              {
                fontSize: "15px",
                color: "orange",
                textAlign: "left",
              }
            }>Computer Science</p>
          </div>
          <div className="socials">
            <span><FaLinkedin size={20} color="blue" className="ms-3"/></span>
            <span><FaInstagram size={20} color="red" className="ms-1"/></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCards;
