import { LazyLoadImage } from "react-lazy-load-image-component";
import day71 from "./dayimages/7-1.jpg";
import day72 from "./dayimages/7-2.jpg";
import day73 from "./dayimages/7-3.jpg";
import day74 from "./dayimages/7-4.jpg";
import day75 from "./dayimages/7-5.jpg";
import "./day.css";
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day7 = () => {

  const { day } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="day-page">
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

      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day71} alt="Baguio City View" effect="blur" />
          <p className="image-description">
          Our last day in Baguio kicked off with a bit of adventure—hopping onto rented pedal bikes, mini motorcycles, and tourist-friendly quad bikes near Burnham Park.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day72} alt="Indigenous Tribes in Baguio" effect="blur" />
          <p className="image-description">
          Whether you went full throttle or just cruised at a lazy pace, the ride gave a childlike thrill and a unique way to enjoy the cool Baguio breeze. A perfect blend of fun and freedom to mark the trip’s grand finale.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day73} alt="Loyalty Statue at PMA" effect="blur" />
          <p className="image-description">
          Later in the day, I found myself back at The Mansion, This time, the revisit felt more relaxed, giving us the chance to really soak in the details: the manicured gardens, the colonial charm, and the calm atmosphere surrounding the presidential retreat. It was a nostalgic stop that reminded us how every visit to Baguio holds something familiar, yet always feels new.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day74} alt="Military Aircraft at PMA" effect="blur" />
          <p className="image-description">
          That night, we snapped a quick groufie in the dorm room—nothing fancy, just all of us hanging out, a bit messy, a bit tired, but all smiles, The last night of stay, before the flight the next day.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day75} alt="Melchor Hall at PMA" effect="blur" />
          <p className="image-description">
          The next morning, bags packed and sleepy eyes all around, we squeezed into the tight dorm hallway for one last groupie before heading out. It was a bit cramped, a little chaotic, but full of good energy. Everyone was half-laughing, half-hugging, trying to delay the goodbye just a little longer. That quick photo in the narrow hallway turned out to be one of the most meaningful—proof that even the smallest spaces can hold the biggest memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day7;
