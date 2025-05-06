import { LazyLoadImage } from "react-lazy-load-image-component";
import day71 from "./dayimages/7-1.jpg";
import day72 from "./dayimages/7-2.jpg";
import day73 from "./dayimages/7-3.jpg";
import day74 from "./dayimages/7-4.jpg";
import day75 from "./dayimages/7-5.jpg";
import profile from "./dayimages/images/profile.png";
import AnimatedReveal from "../AnimatedReveal";
import { FaThumbsUp, FaHeart, FaShareAlt } from 'react-icons/fa';
import "./day.css";

import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day7 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const imageContent = [
    {
      src: day71,
      alt: "Baguio City View",
      desc: "Our last day in Baguio kicked off with a bit of adventure—hopping onto rented pedal bikes, mini motorcycles, and tourist-friendly quad bikes near Burnham Park.",
    },
    {
      src: day72,
      alt: "Riding at Burnham Park",
      desc: "Whether you went full throttle or just cruised at a lazy pace, the ride gave a childlike thrill and a unique way to enjoy the cool Baguio breeze. A perfect blend of fun and freedom to mark the trip’s grand finale.",
    },
    {
      src: day73,
      alt: "Back at The Mansion",
      desc: "Later in the day, I found myself back at The Mansion. The revisit felt more relaxed—manicured gardens, colonial charm, and the peaceful atmosphere made for a nostalgic stop.",
    },
    {
      src: day74,
      alt: "Final Dorm Groufie",
      desc: "That night, we snapped a quick groufie in the dorm room—nothing fancy, just all of us hanging out, a bit messy, a bit tired, but all smiles. The last night of stay, before the flight the next day.",
    },
    {
      src: day75,
      alt: "Tight Hallway Groupie",
      desc: "The next morning, bags packed and sleepy eyes all around, we squeezed into the tight dorm hallway for one last groupie. Cramped, chaotic, but full of energy and laughter—proof that even the smallest spaces can hold the biggest memories.",
    },
  ];

  return (
    <div className="day-page">
      <AnimatedReveal index={0}></AnimatedReveal>
      <div className="day-content">
        <div className="text-right">
          <h1>Free Day: Baguio</h1>
          <hr />
          <br />
          <p>
            Our last day in Baguio was a refreshing breath of cool pine-scented air. With no strict plans or schedules, we embraced the city at our own pace.
          </p>
        </div>
      </div>

      {imageContent.map((item, index) => (
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

export default Day7;
