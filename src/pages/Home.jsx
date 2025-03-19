import "../styles/Home.css";
import { useState } from "react";
import { HeadVector } from "../assets/Images/Images";
import { MdOutlineMenuBook } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { LatestSkills } from "../assets/Images/Images";
import { Career } from "../assets/Images/Images";
import Certificate from "../assets/Images/certificate.png";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="container-fluid header">
        <div className="container header-container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light w-100  mt-3">
              <div className="container">
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

                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <GiHamburgerMenu
                    style={{
                      fontSize: "30px",
                      color: "#800080",
                    }}
                  />
                </button>

                <div
                  className={`collapse navbar-collapse justify-content-end align-items-center${
                    menuOpen ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Courses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <button className="sign-in-btn"> Sign In</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="row header-content align-items-center mt-5">
            <div className="col-md-6">
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "700",
                  lineHeight: "135%",
                  letterSpacing: "0%",
                }}
              >
                The{" "}
                <h1
                  style={{
                    display: "inline",
                    fontWeight: "700",
                    lineHeight: "135%",
                    letterSpacing: "0%",
                    color: "#FF4C29",
                  }}
                >
                  Smart
                </h1>{" "}
                <br />
                Choice For{" "}
                <h1
                  style={{
                    display: "inline",
                    fontWeight: "700",
                    lineHeight: "135%",
                    letterSpacing: "0%",
                    color: "#FF4C29",
                  }}
                >
                  Future
                </h1>
              </h1>
              <p style={{ textAlign: "left", marginTop: "20px", color: "#6C757D", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Totam
                sit adipisci debitis, itaque quibusdam numquam <br /> sequi sed soluta
               
              </p>
              <div className="search-container">
                <AiOutlineSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for a location..."
                  className="search-input"
                />
                <button className="search-button" type="submit">
                  Continue
                </button>
              </div>
            </div>
            <div className="col-md-6 head-vector">
              <img src={HeadVector} alt="Head Vector" />
            </div>
          </div>
        </div>
        <div className="header-footer">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="content-box d-flex align-items-center">
                  <div className="icon-box">
                    <img src={LatestSkills} alt="" />
                  </div>
                  <div>
                    <h5>Learn The Latest Skills</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="content-box d-flex align-items-center">
                  <div className="icon-box">
                    <img src={Career} alt="" />
                  </div>
                  <div>
                    <h5>Get Ready For a Career</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="content-box d-flex align-items-center">
                  <div className="icon-box">
                    <img src={Certificate} alt="" />
                  </div>
                  <div>
                    <h5>Earn a Certificate</h5>
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
}

export default App;
