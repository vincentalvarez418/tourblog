import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaThumbsUp, FaHeart, FaShareAlt } from 'react-icons/fa';
import AnimatedReveal from "../AnimatedReveal";
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import day41 from "./dayimages/4-1.jpg";
import day42 from "./dayimages/4-2.jpg";
import day43 from "./dayimages/4-3.jpg";
import day44 from "./dayimages/4-4.jpg";
import day45 from "./dayimages/4-5.jpg";
import day46 from "./dayimages/4-6.jpg";
import day47 from "./dayimages/4-7.jpg";
import day48 from "./dayimages/4-8.jpg";
import profile from "./dayimages/images/profile.png";
import "./day.css";

const Day4 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const content = [
    {
      src: day41,
      alt: "Electrical Switchboard and E-learning Setup",
      desc: "Captured in this image is a modern electrical switchboard accompanied by a specialized E-learning training system. Various technical components such as switches, circuit breakers, and intricately arranged wiring panels create a realistic training environment. Beside it, secure cases filled with robotic hardware hint at hands-on learning modules that fuse automation and education. The scene offers a glimpse into how Hytec PH enables institutions to deliver cutting-edge, industry-aligned skills training."
    },
    {
      src: day42,
      alt: "Control Console Connected to PC",
      desc: "This setup showcases a desktop PC intricately connected to an electric control console tailored for robotics and programming education. The visual layout emphasizes how theory and practical application come together, allowing students or trainees to simulate, test, and troubleshoot automation processes in real-time. It’s a powerful reminder of how integrated systems are revolutionizing technical training."
    },
    {
      src: day43,
      alt: "Voltage Regulation and Monitoring Station",
      desc: "Highlighted here is a highly detailed technical station filled with dials, gauges, and pressure monitors used for voltage and system regulation. The setup, complete with neatly routed wires and connected sensors, reflects Hytec’s commitment to producing real-world industrial simulations. These systems aren't just teaching aids—they're bridges that connect learners directly to the demands of modern engineering and automation industries."
    },
    {
      src: day44,
      alt: "IT Module Control System",
      desc: "This image offers a peek into the modular systems developed by Hytec to simplify complex IT operations. Seen here are components like the Digger Module, used for efficient data handling, and the Button Module, which enhances interactive functions. These modules form part of a broader control system designed to give users intuitive command over IT hardware, offering flexibility and precision to instructors and learners alike."
    },
    {
      src: day45,
      alt: "Electrical Trainer Suitcase",
      desc: "A unique educational toolkit is featured here—a rugged suitcase packed with electrical trainer components. Alongside it are prototype builds from students who have gone through Hytec's training programs. This setup not only allows for mobile learning but also showcases the creativity and technical skills honed through hands-on experimentation and guided instruction."
    },
    {
      src: day46,
      alt: "Medical Prototype by Hytec",
      desc: "In a promising stride toward healthcare innovation, this image captures one of Hytec’s experimental medical devices. With a clean, ergonomic design and embedded sensors, the prototype is crafted to support diagnostics and monitoring. It's an exciting indication of how Hytec is diversifying its reach—from engineering labs to hospital wards—pushing technology to serve humanity more effectively."
    },
    {
      src: day47,
      alt: "LAN Training and Prototype Equipment",
      desc: "This setup features a compact yet powerful collection of LAN trainers, data storage drives, and a prototype surveillance device. It embodies Hytec’s mission to keep learning environments aligned with industry-grade tools. Each piece of hardware reflects their philosophy of exposing students to the same equipment used in professional IT and networking fields, ensuring smooth transitions from classroom to career."
    },
    {
      src: day48,
      alt: "Weather Monitoring Device",
      desc: "Pictured here is a fully integrated weather monitoring system developed by Hytec for educational and research use. With its array of sensors and data logging capabilities, it allows users to observe environmental changes in real-time. This technology is a testament to Hytec’s vision of merging science, sustainability, and education—providing tools that inspire future climatologists, engineers, and innovators."
    }
  ];

  return (
    <div className="day-page">
      <AnimatedReveal index={0} />
      <div className="day-content">
        <div className="text-right">
          <h1>Robotic Solutions: Hytec PH</h1>
          <hr />
          <br />
          <p>
            Hytec Power, Incorporated is an innovative company providing products and services for both academe and industry. It is the leading industrial and educational solutions provider in the Philippines.
          </p>
        </div>
      </div>

      {content.map((item, index) => (
        <div className="day-content" key={index}>
          <div className="image-block">
            <LazyLoadImage
              src={item.src}
              alt={item.alt}
              effect="blur"
              height="auto"
              width="100%"
            />
            <div className="comment-block left">
              <img src={profile} alt="Guide" className="profile-pic" />
              <div className="comment-bubble">
                <p>{item.desc}</p>
                <div className="social-buttons">
                  <button className="social-button like-button">
                    <FaThumbsUp size={20} />
                    <span>25K Likes</span>
                  </button>
                  <button className="social-button heart-button">
                    <FaHeart size={20} />
                    <span>30K Hearts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="post-hr" />
        </div>
      ))}
    </div>
  );
};

export default Day4;
