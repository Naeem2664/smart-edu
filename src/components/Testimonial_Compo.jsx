import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Profile } from "../assets/Images/Images";
import '../styles/Testimonials.css'
const testimonials = [
  {
    text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself",
    name: "Naeem",
    role: "Web Developer",
  },
  {
    text: "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
    name: "Ghaffar",
    role: "Web Design",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    name: "Amir",
    role: "UI/UX Design",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Bilal",
    role: "Software Engineer",
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Ali",
    role: "Graphic Designer",
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "5px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold">What Student's Say</h2>
      <p className="text-muted">Lorem Ipsum is simply dummy text of the printing.</p>
      <div className="row d-flex justify-content-center">
        <div className="carousel-container">
        <Slider {...settings} className="mt-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div className="card mx-2 p-3 shadow-sm border-0" style={{ width: "250px", height: "220px" }}>
              <p className="text-muted small text-left" style={
                {
                    textAlign:'left',
                    overflow: 'hidden',
                    fontSize: '14px',
                    color: '#6c757d',
                }
              }>{testimonial.text}</p>
              <div className="d-flex align-items-center mt-3 justify-content-center lower-section">
                <img src={Profile} alt={testimonial.name} className="rounded-circle me-2 align-self-start" style={{ width: "40px", height: "40px" }} />
                <div>
                  <p className="mb-0" style={{ fontSize: "14px",textAlign:'left' }}>{testimonial.name}</p>
                  <small className="text-muted" style={{ fontSize: "12px",textAlign:'left' }}>{testimonial.role}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </div>
      
      </div>
      
    </div>
  );
};

export default TestimonialCarousel;
