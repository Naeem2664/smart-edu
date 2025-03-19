import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid mt-5 footer"
        style={{
          backgroundColor: "#fff9eb",
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingTop: "50px",
          color: "#000",
        }}
      >
        <div className="row">
          <div className="col-md-4">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <MdOutlineMenuBook
                style={{
                  fontSize: "30px",
                  color: "#800080",
                  marginRight: "10px",
                  marginBottom: "5px",
                }}
              />{" "}
              Smart Edu
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quidem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Harum, odio!.
            </p>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>03032664863</li>
              <li>
                <a href="mailto:m.naeem.4863@gmail.com">
                  m.naeem.4863@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p className="text-center">© 2025 Smart Edu. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
