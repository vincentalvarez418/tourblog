import { LazyLoadImage } from "react-lazy-load-image-component"; 
import day11 from "./dayimages/1-1.jpg";
import day12 from "./dayimages/1-2.jpg";
import day13 from "./dayimages/1-3.jpg";
import day14 from "./dayimages/1-4.jpg";
import day15 from "./dayimages/1-5.jpg";
import day16 from "./dayimages/1-6.jpg";
import day17 from "./dayimages/1-7.jpg";
import day18 from "./dayimages/1-8.jpg";
import AnimatedReveal from "../AnimatedReveal";
import "./day.css";

import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day1 = () => {

  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="day-page">
      <AnimatedReveal index={0}></AnimatedReveal>
      <div className="day-content">
        <div className="text-right">
          <h1>Introduction: Manila</h1>
          <hr />
          <br />
          <p>
            Manila, the bustling capital of the Philippines, is an exciting blend of history, culture, and modernity. Located along the western coast of Luzon, the city is filled with diverse influences, from its Spanish colonial heritage to its vibrant street life. As you explore Manila, you’ll be immersed in the energy of its busy streets, where old and new come together in perfect harmony. From historical landmarks to towering skyscrapers, the city’s charm lies in its ability to offer something for every type of traveler.
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
            effect="blur"
            height="auto"
            width="100%"
          />
          <p className="image-description">
            This vibrant image captures the heart of Manila’s street life, as seen from a vehicle weaving through the bustling city. The lively traffic of jeepneys, motorcycles, and cars creates an almost choreographed dance as they move along the busy roads. The contrast between the modern skyscrapers and the historical buildings creates a unique cityscape that is unmistakably Manila. The scene is filled with energy, offering a snapshot of the fast-paced yet colorful life that characterizes the city.
          </p>
        </div>
      </div>

      <br />
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
            In this shot, the city’s green spaces stand in contrast to the urban jungle of towering buildings. The lush trees provide a calming balance to the surrounding high-rise structures, highlighting the harmonious coexistence of nature and urban development in Manila. It’s a reminder that even in a sprawling metropolis, nature can find a way to thrive alongside modern life, offering an oasis of greenery amid the concrete and steel.
          </p>
        </div>
      </div>

      <br />
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
            This tranquil scene from Rizal Park offers a peaceful respite in the heart of Manila. The park, dedicated to the national hero, José Rizal, is a vast green space adorned with beautifully manicured gardens and towering monuments. Here, locals and tourists alike come to unwind, reflect, or simply enjoy the natural beauty that contrasts with the surrounding city. The park represents not only a place of relaxation but also a symbol of national pride and history.
          </p>
        </div>
      </div>

      <br />
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
            The grand entrance to Fort Santiago, a historic fort built during the Spanish colonial era, evokes a sense of stepping back in time. The sturdy stone walls of the gate, coupled with the ancient architecture of the fort, tell the stories of a bygone era. Fort Santiago is one of the most significant historical sites in Manila, offering visitors a glimpse into the country's turbulent past. The fort has witnessed many important events in Philippine history and remains a testament to the resilience of the Filipino people.
          </p>
        </div>
      </div>

      <br />
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
            From the ramparts of Fort Santiago, the view of Manila is both striking and surreal. The fort’s historical stone walls stand in stark contrast to the modern glass and steel structures of the city’s skyline. The tranquil body of water in the foreground adds a serene touch to the view, offering a peaceful juxtaposition to the lively city beyond. The image perfectly captures the fusion of the old and new, with the fort acting as a symbol of history amid the bustling metropolis.
          </p>
        </div>
      </div>

      <br />
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
            A haunting look into the underground tunnels of Fort Santiago, where the remnants of a dark and painful chapter in Philippine history still echo. These tunnels were once used to house prisoners, many of whom endured unimaginable suffering under colonial rule. The stone walls, now silent, tell stories of resilience and hardship. The chilling atmosphere of these tunnels serves as a somber reminder of the brutalities faced by those who fought for freedom.
          </p>
        </div>
      </div>

      <br />
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
            The iconic Globe at Mall of Asia stands tall in the heart of Pasay City, symbolizing the Philippines’ connection to the global stage. The giant rotating globe, adorned with colorful lights, is a favorite landmark and a symbol of Manila’s modernity and progress. People gather here to take photos, enjoy the surrounding area, and be reminded of the country’s place in the world. It’s a perfect blend of art, design, and technology, making it one of Manila’s must-see attractions.
          </p>
        </div>
      </div>

      <br />
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
            The towering Ferris Wheel near Mall of Asia offers one of the most breathtaking views of Manila Bay. As it turns against the backdrop of the city skyline, visitors are treated to panoramic views of the water, the city, and the distant mountains. The Ferris wheel is a favorite among tourists, especially during sunset when the sky is painted in vibrant hues of orange and pink, casting a magical glow over the bay. It’s a unique and unforgettable experience that captures the beauty of Manila from above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day1;
