import { LazyLoadImage } from "react-lazy-load-image-component";
import day51 from "./dayimages/5-1.jpg";
import day52 from "./dayimages/5-2.jpg";
import day53 from "./dayimages/5-3.jpg";
import day54 from "./dayimages/5-4.jpg";
import day55 from "./dayimages/5-5.jpg";
import day56 from "./dayimages/5-6.jpg";
import day57 from "./dayimages/5-7.jpg";
import day58 from "./dayimages/5-8.jpg";
import "./day.css";
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day5 = () => {

  const { day } = useParams();
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>Manila Transportation Foundations</h1>
          <hr />
          <br />
          <p>
          LRTA (Light Rail Transit Authority) is the government agency responsible for overseeing the planning, construction, operation, and maintenance of light rail systems in the Philippines. It plays a crucial role in developing mass transit solutions to ease urban congestion and improve public transportation.
          MMDA (Metropolitan Manila Development Authority) manages traffic, flood control, urban development, and public safety across Metro Manila. It coordinates with local government units to implement policies that ensure the efficient movement of people and vehicles in the capital region.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day51} alt="Hytec Electrical Setup" effect="blur" />
          <p className="image-description">
          The image captures a parking bay within an LRT facility, showing a single inactive train positioned on the track inside a large warehouse-like structure. The area is spacious and industrial, with concrete flooring, support beams, and overhead lighting. The stationary train suggests maintenance or storage, highlighting the behind-the-scenes operations of the rail transit system.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day52} alt="Hytec PC Console" effect="blur" />
          <p className="image-description">
          The image shows the interior of the LRTA operation center, featuring a series of monitors displaying live CCTV feeds from various locations along the rail network. The control room is well-organized, with operators closely monitoring the screens, ensuring smooth operations of the light rail system. The room is equipped with communication tools and surveillance equipment, providing a comprehensive view of the system’s performance and security.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day53} alt="Hytec Voltage Monitor" effect="blur" />
          <p className="image-description">
            The image depicts a set of empty train rails inside a dimly lit warehouse. The tracks stretch into the distance, creating a sense of isolation and stillness. The warehouse's vast, empty space and the absence of any trains suggest a moment of pause or maintenance, with the focus on the silent infrastructure awaiting use.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day54} alt="Hytec Modules" effect="blur" />
          <p className="image-description">
          The image shows a wide view of multiple train tracks outside the docking bay of the LRTA facility. The tracks extend in various directions, leading toward different platforms and maintenance areas. The scene is open, with clear skies above and the tracks stretching into the distance, emphasizing the scale and infrastructure of the rail system.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day55} alt="Hytec Electrical Trainer" effect="blur" />
          <p className="image-description">
          The image shows the interior of an inactive LRT train, with the carriages bathed in darkness and no lights illuminated. Despite the lack of lighting, the outlines of the seats, poles, and interior structure are visible in the dim environment, creating an eerie, quiet atmosphere. The stillness inside contrasts with the usual bustling energy of an active train.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day56} alt="Hytec Medical Devices" effect="blur" />
          <p className="image-description">
          The image displays a group of well-maintained government buildings within a secured compound. Each structure has a distinct, clean architectural design, with wide open spaces, paved driveways, and perimeter fencing. The layout suggests an administrative or operational facility, with signage visible from afar indicating its public service function.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day57} alt="Hytec LAN Trainer" effect="blur" />
          <p className="image-description">
          The image shows the interior of an active LRT train with only a few guests aboard. The train is well-lit, with clear views of the seats, poles, and the clean, modern design of the interior. The atmosphere is quiet and calm, reflecting a peaceful ride with minimal crowding, allowing for a comfortable travel experience.
          </p>
        </div>
      </div>

      <br />

      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day58} alt="Hytec Weather Machine" effect="blur" />
          <p className="image-description">
          The image shows a briefing table inside the MMDA facility, where staff and officials gather for discussions and briefings. The table is neatly arranged with documents, laptops, and communication devices, reflecting a formal setting for coordination and decision-making. The environment is functional and professional, emphasizing the importance of planning and strategy in managing Metro Manila’s traffic and urban concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day5;
