import React from "react";
import { UXImage } from "../../assets/Images/Images";
import "../../styles/CourseCard-Style.css";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { PiDownloadSimpleLight } from "react-icons/pi";
const CourseCards = () => {
  const colors = {
    orange: "#FFA500",
    grey: "#A9A9A9",
  };
  const stars = Array(5).fill(0);
  const rating = 4; // Define the rating variable with a value

  return (
    <>
      <div className="card">
        <div className="image">
          <img src={UXImage} alt="course-image" className="" />
        </div>
        <div className="card-body w-100 p-0 description">
          <div className="type-rating pt-3">
            <p style={{ display: "inline", textAlign: "left" }}>
              Web Development
            </p>
            <span style={{ display: "inline", float: "right" }}>
              {stars.map((_, index) => {
                return (
                  <p key={index} style={{ display: "inline-block" }}>
                    <FaStar
                      size={10}
                      color={rating > index ? colors.orange : colors.grey}
                    />
                  </p>
                );
              })}
            </span>
          </div>
          <h6>Web Development for Beginners</h6>
          <p style={{ textAlign: "left" ,color: "#FFA500", fontWeight: "bold", fontSize: "12px"}}>$100</p>
          <hr />
          <div className="stats mb-3">
            <p style={{ display: "inline-block", textAlign: "left",margin:'3px' }} className="me-3">
              <IoTimeOutline
                size={15}
                color={colors.grey}
                style={{ display: "inline-block" }}
                className="me-1"
              />
              <span style={{ display: "inline-block", fontSize: "12px" }}>
                2 hours
              </span>
            </p>
            <p style={{ display: "inline-block", textAlign: "right" }} className="me-3">
              <BsCameraVideo
                size={15}
                color={colors.grey}
                style={{ display: "inline-block" }}
                className="me-1"
              />
              <span style={{ display: "inline-block", fontSize: "12px" }}>
                12 Lectures
              </span>
            </p>
            <p style={{ display: "inline-block", textAlign: "right" }}>
              <PiDownloadSimpleLight
                size={15}
                color={colors.grey}
                style={{ display: "inline-block" }}
                className="me-1"
              />
              <span style={{ display: "inline-block", fontSize: "12px" }}>
                250 Sales
              </span>
            </p>
          </div>

        </div>
        <button>Join Course</button>
      </div>
    </>
  );
};

export default CourseCards;
