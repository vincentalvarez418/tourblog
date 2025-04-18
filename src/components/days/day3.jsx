import { LazyLoadImage } from "react-lazy-load-image-component";

import React from "react";
import day31 from "./dayimages/3-1.jpg";
import day32 from "./dayimages/3-2.jpg";
import day33 from "./dayimages/3-3.jpg";
import day34 from "./dayimages/3-4.jpg";
import day35 from "./dayimages/3-5.jpg";
import day36 from "./dayimages/3-6.jpg";
import day37 from "./dayimages/3-7.jpg";
import day38 from "./dayimages/3-8.jpg";
import "./day.css";

const Day3 = () => {
  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>Time Vault: Museum</h1>
          <hr />
          <br />
          <p>
            Located right across Quezon Park, the National Museum of the
            Philippines stands as a gateway to the country’s rich heritage,
            also featuring the Manuel L. Quezon legacy.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day31} alt="Subic Bay View 1" effect="blur" />
          <p className="image-description">
          The grand entrance of the National Museum of the Philippines stands proudly with its tall neoclassical columns and wide stone steps.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day32} alt="Subic Bay Streets" effect="blur" />
          <p className="image-description">
          Inside the National Museum, a sleek and modern elevator-like structure rises within the grand atrium. Its glass walls reflect the surrounding architectural details, offering a striking contrast between the museum’s classic design and contemporary touches.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day33} alt="Subic Bay Beach" effect="blur" />
          <p className="image-description">
          The interior of the National Museum is a captivating blend of elegance and history. Spacious galleries with high ceilings showcase an array of artistic and cultural exhibits, from historical artifacts to contemporary masterpieces.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day34} alt="Subic Bay Port" effect="blur" />
          <p className="image-description">
          The semi-spiral staircase, seen from above, offers a stunning architectural view. Its elegant curves lead visitors from one level to another, with the sleek design emphasizing both functionality and beauty.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day35} alt="Subic Bay Freeport" effect="blur" />
          <p className="image-description">
          This image showcases the former office of Manuel L. Quezon, the first president of the Commonwealth of the Philippines. Preserved to reflect the era, the office exudes a sense of history, with its vintage furniture and carefully curated artifacts.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day36}
            alt="Subic Bay Historical Site"
            effect="blur"
          />
          <p className="image-description">
          This image features a scenic pathway lined with multiple flags, likely located near Quezon Park.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day37}
            alt="Subic Bay Adventure Park"
            effect="blur"
          />
          <p className="image-description">
          This image showcases one of the cars once used by a former president of the Philippines. The classic vehicle stands as a symbol of the country's political history, offering a glimpse into the past and the life of a leader.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day38} alt="Subic Bay Sunset" effect="blur" />
          <p className="image-description">
          This image features the skeleton of a sperm whale, displayed prominently inside the museum. The massive structure serves as a fascinating reminder of the ocean's vast and mysterious wildlife.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day3;
