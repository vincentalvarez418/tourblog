import { LazyLoadImage } from "react-lazy-load-image-component"; 
import day21 from "./dayimages/2-1.jpg"; 
import day22 from "./dayimages/2-2.jpg"; 
import day23 from "./dayimages/2-3.jpg"; 
import day24 from "./dayimages/2-4.jpg"; 
import day25 from "./dayimages/2-5.jpg"; 
import day26 from "./dayimages/2-6.jpg"; 
import day27 from "./dayimages/2-7.jpg"; 
import day28 from "./dayimages/2-8.jpg"; 
import "./day.css"; 
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Day2 = () => {

  const { day } = useParams();
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>City of Bays: Subic Bay</h1>
          <hr />
          <br />
          <p>Subic Bay, located on the western coast of Luzon in the Philippines, is a picturesque and historically rich area known for its stunning natural beauty and strategic location. Once a bustling U.S. naval base, Subic Bay has transformed into a thriving commercial, industrial, and tourist hub, offering a unique blend of modern development and scenic landscapes. The bay is not only a historical landmark but a testament to the resilience and growth of the region, with the water offering stunning views and the land boasting lush greenery and a relaxed atmosphere.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day21} alt="Subic Bay View 1" effect="blur" />
          <p className="image-description">The museum gallery dedicated to the history of Subic Bay offers a fascinating glimpse into the area's past. From its early days as a hub for maritime trade to its transformation into a U.S. naval base, the exhibit showcases the pivotal moments that shaped the region. Visitors can learn about the people, cultures, and events that have influenced Subic's development, making it not just a scenic location but one rich in history and heritage.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day22} alt="Subic Bay Streets" effect="blur" />
          <p className="image-description">This beautiful scene showcases the calm waters of Subic Bay, framed by tall pine trees along the shore. The gentle waves shimmer under the clear blue sky, creating a peaceful and refreshing atmosphere. The bay’s pristine environment makes it a haven for both locals and tourists, offering the perfect setting for leisurely strolls, boat rides, or simply enjoying the stunning views from the shore. Subic Bay’s natural beauty is a reminder of how both nature and human development can coexist harmoniously.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day23} alt="Subic Bay Beach" effect="blur" />
          <p className="image-description">This iconic tower stands proudly at the heart of Subic Bay's control zone, overseeing the activities within the bay and surrounding areas. From the tower, you can get a sweeping view of the entire bay, including the bustling commercial zones, serene waters, and the lush forested mountains in the backdrop. The tower itself serves as a symbol of the area's strategic importance, linking Subic’s maritime history to its modern development as a key port and tourist destination.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day24} alt="Subic Bay Port" effect="blur" />
          <p className="image-description">The Subic Bay Exhibits and Convention Center (SBECC) is a striking building that showcases the region's rich history and culture. It serves as a venue for various exhibits, conventions, and events, allowing visitors to experience the heritage and modern developments of Subic Bay. This venue plays a crucial role in Subic's identity, blending its historical roots with its aspirations for future growth. Whether it's an art exhibit, a historical display, or a corporate convention, the SBECC provides a space that reflects the vibrant community of Subic Bay.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day25} alt="Subic Bay Freeport" effect="blur" />
          <p className="image-description">This image captures the bustling scene of Subic Bay’s port, where ships are docked and loading/unloading operations take place. The water is calm, reflecting the clear sky above, while the cargo ships and container terminals signify Subic Bay’s importance as a vital maritime hub. The port has become one of the most essential economic drivers of the region, not just for the Philippines but as an international trade route. This modernized port area plays a vital role in Subic’s economy, showcasing how far the area has come from its military roots.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day26} alt="Subic Bay Historical Site" effect="blur" />
          <p className="image-description">This photo features the iconic “Subic Bay” letter statue, a popular spot for tourists to snap photos and enjoy the view. Located along the bay, the statue has become a symbol of Subic’s transformation and welcoming spirit. The vibrant colors of the sculpture stand out against the beautiful backdrop of the bay’s waters, offering visitors a perfect place to capture memories of their visit. This spot is a testament to the pride locals take in their community and its remarkable transformation over the years.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day27} alt="Subic Bay Adventure Park" effect="blur" />
          <p className="image-description">Prominently displayed is a sign urging visitors not to litter — a simple yet powerful reminder of the importance of preserving the natural beauty of the area. This sign stands at the entrance of Subic Bay’s adventure park, a place where both nature lovers and thrill-seekers can come together. Whether it’s exploring the forests or engaging in eco-friendly activities, the sign represents the community’s commitment to sustainable tourism and maintaining the pristine condition of the bay’s surroundings. The park serves as a place to connect with nature while encouraging responsible environmental practices.</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="day-content">
        <div className="image-block">
          <LazyLoadImage src={day28} alt="Subic Bay Sunset" effect="blur" />
          <p className="image-description">This image features a compelling museum exhibit that traces the foreign powers that invaded and colonized the Philippines throughout its history. The exhibit offers a thought-provoking look at the various cultural influences that have shaped the Philippines, including the legacy left by foreign colonizers. It serves as a powerful reminder of the Philippines’ resilience and the determination of its people to overcome adversities. As you walk through the exhibit, you can reflect on the rich and often tumultuous history of the nation, bringing a deeper understanding of the context surrounding Subic Bay’s development.</p>
        </div>
      </div>
    </div>
  );
};

export default Day2;
