import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";

import day1 from "../resources/dayimages/day1.jpg";
import day2 from "../resources/dayimages/day2.jpg";
import day3 from "../resources/dayimages/day3.jpg";
import day4 from "../resources/dayimages/day4.jpg";
import day5 from "../resources/dayimages/day5.jpg";
import day6 from "../resources/dayimages/day6.jpg";

const tourDays = [
  { day: 1, title: "Introduction: Manila", image: day1 },
  { day: 2, title: "City of Bays: Subic Bay", image: day2 },
  { day: 3, title: "Time Vault: Philippine Relics", image: day3 },
  { day: 4, title: "Robotic solutions: Hytec PH", image: day4 },
  { day: 5, title: "Manila Transportation Foundations", image: day5 },
  { day: 6, title: "Strawberry City: Baguio", image: day6 }
];


const Content = () => {
  return (
    <div className="outer-container">
      <div className="content-wrapper">
        <div className="content-container">
          {tourDays.map((tour) => (
            <div key={tour.day} className="tour-day">
              <h3>{tour.title}</h3>
              <img src={tour.image} alt={`Day ${tour.day}`} className="tour-image" />
              <p>{tour.description}</p>
              <Link to={`/day${tour.day}`} className="learn-more">
                VENTURE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
