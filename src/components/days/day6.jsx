import { LazyLoadImage } from "react-lazy-load-image-component";
import day61 from "./dayimages/6-1.jpg";
import day62 from "./dayimages/6-2.jpg";
import day63 from "./dayimages/6-3.jpg";
import day64 from "./dayimages/6-4.jpg";
import day65 from "./dayimages/6-5.jpg";
import day66 from "./dayimages/6-6.jpg";
import day67 from "./dayimages/6-7.jpg";
import day68 from "./dayimages/6-8.jpg";
import profile from "./dayimages/images/profile.png";
import AnimatedReveal from "../AnimatedReveal";
import { FaThumbsUp, FaHeart, FaShareAlt } from 'react-icons/fa';
import "./day.css";

import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day6 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const images = [
    {
      src: day61,
      alt: "View of Baguio",
      desc: "Perched high in the Cordillera mountains, this view of Baguio showcases the city's signature cool mist blanketing its vibrant urban sprawl. The sharp outlines of the distant hills contrast beautifully with the scattered homes, creating a canvas that is both serene and alive. It's the kind of morning view that makes you stop, breathe deep, and smile without reason."
    },
    {
      src: day62,
      alt: "Indigenous Tribes and Horses",
      desc: "Baguio’s spirit comes alive through its indigenous roots — from vibrant tribal garments to the lively presence of ponies decorated for tourists. This cultural fusion allows you to walk through history while engaging with the present, a rare glimpse into the traditions that have shaped the region for generations."
    },
    {
      src: day63,
      alt: "Loyalty Statue at PMA",
      desc: "Standing tall within the Philippine Military Academy grounds, the Loyalty Statue commands attention and respect. It’s more than a sculpture — it’s a symbol of unwavering service, sacrifice, and the deep honor instilled in every cadet. Surrounded by rolling lawns and disciplined calm, it offers a powerful reminder of national pride and courage."
    },
    {
      src: day64,
      alt: "PMA Airplanes Display",
      desc: "This lineup of retired aircraft on PMA grounds showcases more than just aviation engineering — each plane carries stories of missions flown, skies conquered, and peace maintained. It's like a walk through a metallic museum of air force legacy, stirring both awe and curiosity."
    },
    {
      src: day65,
      alt: "Melchor Hall at PMA",
      desc: "Melchor Hall stands as a historic sentinel of the academy — bold, structured, and grounded in tradition. Built in 1949, its weathered stone walls and rigid symmetry reflect the discipline of the institution, while the Philippine flag flutters proudly above as a beacon of honor."
    },
    {
      src: day66,
      alt: "Bell Tower View",
      desc: "From the Bell Tower’s perch, Baguio’s patchwork of rooftops blends with the greens of pine trees and ridges that stretch into misty horizons. It’s the kind of scene that makes you reflect — a quiet, contemplative snapshot of city and nature embracing each other."
    },
    {
      src: day67,
      alt: "Bell Tower Pathway",
      desc: "Winding its way toward the Bell Tower, this stone-lined path feels like something from a storybook — shaded by trees, dotted with flowers, and cloaked in a calm that hushes every footstep. It's where every moment feels unhurried, and every breath seems fresher than the last."
    },
    {
      src: day68,
      alt: "Strawberry Farm Sunrise",
      desc: "As the sun rises over the strawberry fields of La Trinidad, a soft golden hue kisses the earth and dew sparkles like morning gems. The scent of ripe fruit hangs in the air while farmers begin their harvest — a peaceful, postcard-perfect start to a day in the Strawberry Capital of the Philippines."
    }
  ];

  return (
    <div className="day-page">
      <AnimatedReveal index={0} />
      <div className="day-content">
        <div className="text-right">
          <h1>Strawberry City: Baguio</h1>
          <hr />
          <br />
          <p>
            Baguio, often called the "Summer Capital of the Philippines," is a scenic city nestled in the mountains of the Cordillera region. Known for its cool climate and lush landscapes, Baguio attracts tourists year-round. The city is famous for its vibrant strawberry farming industry, especially in nearby La Trinidad. The fields bloom with strawberries in vibrant hues during harvest, giving Baguio its sweet nickname — "Strawberry City."
          </p>
        </div>
      </div>

      {images.map((item, index) => (
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

export default Day6;
