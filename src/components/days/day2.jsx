import { LazyLoadImage } from "react-lazy-load-image-component"; 

import React from "react";
import day21 from "./dayimages/2-1.jpg"; 
import day22 from "./dayimages/2-2.jpg"; 
import day23 from "./dayimages/2-3.jpg"; 
import day24 from "./dayimages/2-4.jpg"; 
import day25 from "./dayimages/2-5.jpg"; 
import day26 from "./dayimages/2-6.jpg"; 
import day27 from "./dayimages/2-7.jpg"; 
import day28 from "./dayimages/2-8.jpg"; 
import "./day.css"; 

const Day2 = () => {
  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>City of Bays: Subic Bay</h1>
          <hr />
          <br />
          <p>Subic Bay, located on the western coast of Luzon in the Philippines, is a picturesque and historically rich area known for its stunning natural beauty and strategic location. Once a bustling U.S. naval base, Subic Bay has transformed into a thriving commercial, industrial, and tourist hub, offering a unique blend of modern development and scenic landscapes.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day21} alt="Subic Bay View 1" effect="blur" />
          <p className="image-description">The museum gallery dedicated to the history of Subic Bay offers a fascinating glimpse into the area's past. From its early days as a hub for maritime trade to its transformation into a U.S. naval base, the exhibit showcases the pivotal moments that shaped the region.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day22} alt="Subic Bay Streets" effect="blur" />
          <p className="image-description">This beautiful scene showcases the calm waters of Subic Bay, framed by tall pine trees along the shore. The gentle waves shimmer under the clear blue sky, creating a peaceful and refreshing atmosphere.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day23} alt="Subic Bay Beach" effect="blur" />
          <p className="image-description">This iconic tower stands proudly at the heart of Subic Bay's control zone, overseeing the activities within the bay and surrounding areas.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day24} alt="Subic Bay Port" effect="blur" />
          <p className="image-description">The Subic Bay Exhibits and Convention Center (SBECC) is a striking building that showcases the region's rich history and culture. It serves as a venue for various exhibits, conventions, and events, allowing visitors to experience the heritage and modern developments of Subic Bay. </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day25} alt="Subic Bay Freeport" effect="blur" />
          <p className="image-description">This image captures the bustling scene of Subic Bay’s port, where ships are docked and loading/unloading operations take place. The water is calm, reflecting the clear sky above, while the cargo ships and container terminals signify Subic Bay’s importance as a vital maritime hub.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day26} alt="Subic Bay Historical Site" effect="blur" />
          <p className="image-description">This photo features the iconic “Subic Bay” letter statue, a popular spot for tourists to snap photos and enjoy the view.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day27} alt="Subic Bay Adventure Park" effect="blur" />
          <p className="image-description">Prominently displayed is a sign urging visitors not to litter — a simple yet powerful reminder of the importance of preserving the natural beauty of the area.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day28} alt="Subic Bay Sunset" effect="blur" />
          <p className="image-description">This image features a compelling museum exhibit that traces the foreign powers that invaded and colonized the Philippines throughout its history.</p>
        </div>
      </div>
    </div>
  );
};

export default Day2;
