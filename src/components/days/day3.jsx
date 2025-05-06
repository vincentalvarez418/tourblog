import { LazyLoadImage } from "react-lazy-load-image-component";
import day31 from "./dayimages/3-1.jpg";
import day32 from "./dayimages/3-2.jpg";
import day33 from "./dayimages/3-3.jpg";
import day34 from "./dayimages/3-4.jpg";
import day35 from "./dayimages/3-5.jpg";
import day36 from "./dayimages/3-6.jpg";
import day37 from "./dayimages/3-7.jpg";
import day38 from "./dayimages/3-8.jpg";
import profile from "./dayimages/images/profile.png";
import AnimatedReveal from "../AnimatedReveal";
import { FaThumbsUp, FaHeart, FaShareAlt } from 'react-icons/fa';
import "./day.css";

import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day3 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="day-page">
      <AnimatedReveal index={0} />
      <div className="day-content">
        <div className="text-right">
          <h1>Time Vault: Museum</h1>
          <hr />
          <br />
          <p>
            The National Museum of the Philippines, located right across from Quezon Park, is a true cultural treasure chest, preserving and showcasing the country's vast history. The museum is a tribute to Filipino heritage, with exhibits that not only celebrate the nation's rich past but also highlight the legacy of Manuel L. Quezon, the second President of the Philippines, who played a pivotal role in the nation's development.
          </p>
        </div>
      </div>

      {[
        {
          src: day31,
          alt: "National Museum Entrance",
          desc: "The majestic entrance to the National Museum of the Philippines stands as a symbol of its grandeur and historical importance. The neoclassical columns and sweeping stone steps lead visitors into a world where Filipino culture and history are preserved and shared with the public, inviting all to explore the stories that have shaped the nation."
        },
        {
          src: day32,
          alt: "National Museum Atrium",
          desc: "Inside the National Museum, the atrium offers a striking contrast between classical architecture and modern design. A sleek, elevator-like structure with glass walls rises in the middle of the space, reflecting the museum’s classical surroundings. This juxtaposition of old and new symbolizes the ever-evolving nature of Filipino culture and its ability to honor both its traditions and its future."
        },
        {
          src: day33,
          alt: "National Museum Exhibits",
          desc: "As you step further into the museum, you are greeted by spacious galleries that are a feast for the eyes. High ceilings and well-lit spaces showcase a wide range of exhibits, from the ancient artifacts that tell the story of the Philippines' early history to contemporary art that reflects the dynamic culture of today."
        },
        {
          src: day34,
          alt: "Spiral Staircase in Museum",
          desc: "The semi-spiral staircase is not only a functional feature of the National Museum but also an architectural marvel. As you look down from above, the elegant curves of the staircase create a mesmerizing visual flow, leading visitors effortlessly from one level to another."
        },
        {
          src: day35,
          alt: "Manuel L. Quezon's Office",
          desc: "This image showcases the preserved office of Manuel L. Quezon, the first President of the Commonwealth of the Philippines. Stepping into this space is like stepping back in time. The vintage furniture, historical decor, and carefully curated artifacts provide a glimpse into the life of one of the Philippines' most influential leaders."
        },
        {
          src: day36,
          alt: "Quezon Park Pathway",
          desc: "This peaceful pathway lined with flags is likely located near Quezon Park, offering visitors a serene walk while paying homage to the country’s heritage. The flags fluttering in the wind are a powerful symbol of national pride."
        },
        {
          src: day37,
          alt: "President's Car",
          desc: "A glimpse into the life of a former Philippine president is offered through this classic vehicle. Once used by the country's leader, this car stands as a symbol of political history and nostalgia."
        },
        {
          src: day38,
          alt: "Sperm Whale Skeleton",
          desc: "One of the most striking exhibits in the National Museum is the massive skeleton of a sperm whale, displayed in all its grandeur. It evokes awe, reminding us of the ocean’s untamed beauty and the importance of conservation efforts."
        }
      ].map((item, index) => (
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
                  <button className="social-button share-button">
                    <FaShareAlt size={20} />
                    <span>27K Shares</span>
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

export default Day3;
