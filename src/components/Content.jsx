import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from 'lucide-react';
import "./Content.css";

import day1 from "../resources/dayimages/1.jpg";
import day2 from "../resources/dayimages/2.jpg";
import day3 from "../resources/dayimages/3.jpg";
import day4 from "../resources/dayimages/4.jpg";
import day5 from "../resources/dayimages/5.jpg";
import day6 from "../resources/dayimages/6.jpg";
import day7 from "../resources/dayimages/7.jpg";
import random from "../resources/dayimages/randomshots.jpg"; 

const tourDays = [
  { day: 1, title: "DAY 1: WELCOME MANILA", image: day1 },
  { day: 2, title: "DAY 2: CITY OF BAYS - SUBIC BAY", image: day2 },
  { day: 3, title: "DAY 3: TIME VAULT - NATIONAL MUSEUM", image: day3 },
  { day: 4, title: "DAY 4: ROBOTIC SOLUTIONS - HYTEC PH", image: day4 },
  { day: 5, title: "DAY 5: SPEED OF MANILA - LRT", image: day5 },
  { day: 6, title: "DAY 6: STRAWBERRY CITY - BAGUIO", image: day6 },
  { day: 7, title: "DAY 7: EPILOGUE", image: day7 },
  {
    day: 8,
    title: "RANDOM SHOTS",
    image: random,
    dateOverride: "April 7 - April 14, 2025"
  }
];

const getDateString = (dayOffset) => {
  const baseDate = new Date(2025, 3, 7);
  baseDate.setDate(baseDate.getDate() + dayOffset);
  return baseDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const Content = () => {
  return (
    <div className="outer-container">
      <div className="content-wrapper">
        <div className="content-container">
          {tourDays.map((tour) => (
            <div key={tour.day} className="tour-day">
              <h3>{tour.title}</h3>
              <img src={tour.image} alt={`Day ${tour.day}`} className="tour-image" />
              <div className="tour-date flex items-center text-sm text-gray-700 dark:text-gray-300">
                <CalendarDays size={18} className="inline-block mr-2 custom-calendar-icon" />
                {tour.dateOverride || getDateString(tour.day - 1)}
              </div>
              <Link to={tour.day === 8 ? `/randomshots` : `/day${tour.day}`} className="learn-more">
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
