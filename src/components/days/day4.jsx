import { LazyLoadImage } from "react-lazy-load-image-component";

import React from "react";
import day41 from "./dayimages/4-1.jpg";
import day42 from "./dayimages/4-2.jpg";
import day43 from "./dayimages/4-3.jpg";
import day44 from "./dayimages/4-4.jpg";
import day45 from "./dayimages/4-5.jpg";
import day46 from "./dayimages/4-6.jpg";
import day47 from "./dayimages/4-7.jpg";
import day48 from "./dayimages/4-8.jpg";
import "./day.css";

const Day4 = () => {
  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>Robotic solutions: Hytec PH</h1>
          <hr />
          <br />
          <p>
          Hytec Power, Incorporated is an innovative company providing products and services for both academe and industry. It is the leading industrial and educational solutions provider in the Philippines
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day41} alt="Subic Bay View 1" effect="blur" />
          <p className="image-description">
          This image features an electrical switchboard and E-learning hardware setup, highlighting essential tools used in modern technical education. Various components such as switches, circuit breakers, and wiring panels are arranged neatly, while nearby cases house robotic equipment, showcasing the integration of automation in hands-on learning environments.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day42} alt="Subic Bay Streets" effect="blur" />
          <p className="image-description">
          This image shows a PC that is connected to an electric control console, designed for robotics applications.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day43} alt="Subic Bay Beach" effect="blur" />
          <p className="image-description">
          This image showcases a sophisticated setup featuring interconnected components, including a pressure monitor for voltage regulation and an array of wires. Designed for industrial and IT applications, this system exemplifies the cutting-edge solutions provided by Hytec Power, a leading company in the Philippines.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day44} alt="Subic Bay Port" effect="blur" />
          <p className="image-description">
          Hytec Power continues to lead the way in providing innovative solutions for both academic and industrial sectors in the Philippines. Their latest offering includes a range of modules designed to control IT devices with precision and efficiency. Among these are the Digger Module, which enhances data excavation capabilities, and the Button Module, which simplifies user interaction. These modules, along with many others, form a comprehensive system tailored to meet the dynamic needs of modern IT environments.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day45} alt="Subic Bay Freeport" effect="blur" />
          <p className="image-description">
          Hytec Power showcases a portable suitcase containing an electrical trainer alongside custom-built projects crafted by previous students. This innovative setup reflects their commitment to hands-on learning and fostering creativity in technical education.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day46}
            alt="Subic Bay Historical Site"
            effect="blur"
          />
          <p className="image-description">
          Hytec Power is exploring innovative prototypes for medical applications. These devices, designed with precision and advanced technology, aim to enhance healthcare solutions and improve patient outcomes. Their commitment to innovation reflects their dedication to addressing critical needs in the medical field.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage
            src={day47}
            alt="Subic Bay Adventure Park"
            effect="blur"
          />
          <p className="image-description">
          Hytec Power's offerings include advanced LAN trainers, HDD storage devices, and prototype camera-like equipment. These tools are designed to enhance IT training and development, showcasing their dedication to providing cutting-edge solutions for both educational and industrial applications.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day48} alt="Subic Bay Sunset" effect="blur" />
          <p className="image-description">
          Hytec Power features a weather machine designed for precise environmental monitoring and analysis. This innovative device underscores their commitment to integrating advanced technology for both academic and industrial applications. It serves as a valuable tool for studying weather patterns and enhancing climate-related research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day4;