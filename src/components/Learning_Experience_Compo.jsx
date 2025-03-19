import React from "react";
import { LowerSection, EasilyAccessible, FunLearning } from "../assets/Images/Images";
import "../styles/Learning_Exp.css";
const Learning_Experience = () => {
  return (
    <>
      <div className="container-fluid learning-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 image-section">
              <img
                src={LowerSection}
                alt="Learning Experience"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 learning-experience-content">
              <h1>
                Premium{" "}
                <h1 style={{ display: "inline", color: "#FF4C29" }}>
                  Learning
                </h1>{" "}
                <br /> Experience
              </h1>
              <div className="learning-experience-description">
                <div className="learning-experience-description-content">
                  <div className="icon-box">
                    <img src={EasilyAccessible} alt="" />
                  </div>
                  <div className="text-box ms-3">
                    <h5>Easy Access</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="learning-experience-description">
                <div className="learning-experience-description-content">
                  <div className="icon-box">
                    <img src={FunLearning} alt="" />
                  </div>
                  <div className="text-box ms-3">
                    <h5>Fun Learning Expe</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning_Experience;
