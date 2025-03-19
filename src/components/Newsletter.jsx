import React from "react";
import "../styles/Newsletter.css";
const Newsletter = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="newsletter">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-white">
                Subscribe to our newsletter
              </h1>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                quidem.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="newsletter-container">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
