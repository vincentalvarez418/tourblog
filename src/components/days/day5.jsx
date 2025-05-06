import { LazyLoadImage } from "react-lazy-load-image-component";
import day51 from "./dayimages/5-1.jpg";
import day52 from "./dayimages/5-2.jpg";
import day53 from "./dayimages/5-3.jpg";
import day54 from "./dayimages/5-4.jpg";
import day55 from "./dayimages/5-5.jpg";
import day56 from "./dayimages/5-6.jpg";
import day57 from "./dayimages/5-7.jpg";
import day58 from "./dayimages/5-8.jpg";
import profile from "./dayimages/images/profile.png";
import AnimatedReveal from "../AnimatedReveal";
import { FaThumbsUp, FaHeart, FaShareAlt } from 'react-icons/fa';
import "./day.css";
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day5 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const descriptions = [
    {
      src: day51,
      alt: "LRT Parking Bay",
      desc: "The image captures a parking bay within an LRT facility, showing a single inactive train positioned on the track inside a large warehouse-like structure. The stationary train suggests maintenance or storage, highlighting the behind-the-scenes operations of the rail transit system."
    },
    {
      src: day52,
      alt: "LRTA Operation Center",
      desc: "The image shows the interior of the LRTA operation center, featuring a series of monitors displaying live CCTV feeds from various locations. Operators closely monitor the screens, ensuring smooth operations of the light rail system."
    },
    {
      src: day53,
      alt: "Empty Rails Warehouse",
      desc: "The image depicts a set of empty train rails inside a dimly lit warehouse. The tracks stretch into the distance, creating a sense of isolation and stillness, with the focus on the silent infrastructure awaiting use."
    },
    {
      src: day54,
      alt: "LRTA Exterior Tracks",
      desc: "The image shows a wide view of multiple train tracks outside the docking bay. The scene is open, emphasizing the scale and infrastructure of the rail system."
    },
    {
      src: day55,
      alt: "Inactive LRT Interior",
      desc: "The image shows the interior of an inactive LRT train, bathed in darkness. The outlines of the seats and poles are visible in the dim light, creating an eerie, quiet atmosphere."
    },
    {
      src: day56,
      alt: "Government Facility Compound",
      desc: "The image displays well-maintained government buildings within a secured compound, with distinct architectural design and signage indicating public service functions."
    },
    {
      src: day57,
      alt: "Active LRT Ride",
      desc: "The image shows the interior of an active LRT train with a few guests aboard. It’s well-lit and clean, reflecting a peaceful and comfortable travel experience."
    },
    {
      src: day58,
      alt: "MMDA Briefing Table",
      desc: "The image shows a briefing table inside the MMDA facility, set for coordination and decision-making, emphasizing the importance of planning in managing Metro Manila’s urban concerns."
    }
  ];

  return (
    <div className="day-page">
      <AnimatedReveal index={0} />
      <div className="day-content">
        <div className="text-right">
          <h1>Manila Transportation Foundations</h1>
          <hr />
          <br />
          <p>
            LRTA (Light Rail Transit Authority) is the government agency responsible for overseeing the planning, construction, operation, and maintenance of light rail systems in the Philippines. It plays a crucial role in developing mass transit solutions to ease urban congestion and improve public transportation.
            <br /><br />
            MMDA (Metropolitan Manila Development Authority) manages traffic, flood control, urban development, and public safety across Metro Manila. It coordinates with local government units to implement policies that ensure the efficient movement of people and vehicles in the capital region.
          </p>
        </div>
      </div>

      {descriptions.map((item, index) => (
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

export default Day5;
