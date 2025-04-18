import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; 
import day11 from "./dayimages/1-1.jpg";
import day12 from "./dayimages/1-2.jpg";
import day13 from "./dayimages/1-3.jpg";
import day14 from "./dayimages/1-4.jpg";
import day15 from "./dayimages/1-5.jpg";
import day16 from "./dayimages/1-6.jpg";
import day17 from "./dayimages/1-7.jpg";
import day18 from "./dayimages/1-8.jpg";
import "./day.css";

const Day1 = () => {
  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>Introduction: Manila</h1>
          <hr />
          <br />
          <p>
            Manila, the capital of the Philippines, is a city that blends old-world charm with modern-day vibrancy. Sitting on the west coast of Luzon, it’s not just a bustling urban center but a place filled with stories from the past. Walking through Manila, you’ll find a mix of Spanish-era buildings, high-rise buildings, and colorful street markets, creating a unique atmosphere.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day11}
            alt="City Exploration"
            effect="blur" // Lazy loading with blur effect
            height="auto"
            width="100%" // Ensure the image scales well
          />
          <p className="image-description">
            The image captures a dynamic view of Manila's streets, as seen from the perspective of a street-level vehicle. The scene is filled with the energy of the city, with the bustling traffic of jeepneys, motorcycles, and cars weaving through the roads. The streets are lined with a mix of old and new buildings, showcasing the contrast between Manila's rich colonial past and its modern urban growth.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day12}
            alt="City Streets"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            A view of the city from the streets, featuring lush trees and towering buildings. The scene captures the contrast between the greenery and the high-rise structures, showcasing the blend of nature and urban development in Manila.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day13}
            alt="Rizal Park"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            A peaceful view of **Rizal Park**, one of Manila's most iconic landmarks. The image showcases the expansive green spaces, well-manicured gardens, and towering monuments dedicated to the Philippine national hero, José Rizal. The park is a blend of nature and history, offering a serene escape in the heart of the city.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day14}
            alt="Fort Santiago Gate Entrance"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            The image shows the grand entrance to **Fort Santiago**, a historic site in Manila. The gate, with its strong stone walls and old-world charm, stands as a reminder of the country’s colonial past. The fort, once a military stronghold, now offers a glimpse into Philippine history, with its preserved architecture and surrounding gardens.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day15}
            alt="View of Manila from Fort Santiago"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            A beautiful view of the city’s skyline, taken from inside **Fort Santiago**. The image captures the contrast between the historic fort and the modern buildings of Manila, with a serene body of water in the foreground, adding to the peaceful ambiance of the scene. The tall buildings rise in the distance, showcasing Manila's modern urban landscape.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day16}
            alt="Underground Tunnels and Torture Chambers"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            This image takes you deep inside Fort Santiago’s underground tunnels, revealing remnants of a dark and painful past. The tunnels, once used for confinement and torture during the colonial period, stand as a stark reminder of the struggles endured by countless prisoners. The stone walls echo the painful history, showing the harsh reality of the struggles faced by Filipinos under foreign rule.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day17}
            alt="Globe at MOA"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            The Globe at Mall of Asia (MOA) is an iconic landmark in Pasay City, Manila. This large, rotating globe is one of the most recognizable structures in the area, often symbolizing the global connection of the Philippines to the rest of the world. The vibrant colors and unique design make it a perfect spot for photos and a popular attraction for locals and tourists alike.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day18}
            alt="Ferris Wheel near MOA"
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            This image shows the Ferris Wheel near Mall of Asia, one of the largest in the country. The Ferris wheel stands tall against the Manila skyline and offers breathtaking views of Manila Bay. It is a popular attraction for tourists, providing a unique experience of seeing the city from above, especially during sunset when the sky reflects vibrant colors over the water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day1;
