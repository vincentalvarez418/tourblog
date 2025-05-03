import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams, useLocation } from "react-router-dom";
import random1 from "./dayimages/randomshots/randomshot (1).jpg";
import random2 from "./dayimages/randomshots/randomshot (2).jpg";
import random3 from "./dayimages/randomshots/randomshot (3).jpg";
import random4 from "./dayimages/randomshots/randomshot (4).jpg";
import random5 from "./dayimages/randomshots/randomshot (5).jpg";
import random6 from "./dayimages/randomshots/randomshot (6).jpg";
import random7 from "./dayimages/randomshots/randomshot (7).jpg";
import random8 from "./dayimages/randomshots/randomshot (8).jpg";
import random9 from "./dayimages/randomshots/randomshot (9).jpg";
import random10 from "./dayimages/randomshots/randomshot (10).jpg";
import random11 from "./dayimages/randomshots/randomshot (11).jpg";
import random12 from "./dayimages/randomshots/randomshot (12).jpg";
import random13 from "./dayimages/randomshots/randomshot (13).jpg";
import random14 from "./dayimages/randomshots/randomshot (14).jpg";
import random15 from "./dayimages/randomshots/randomshot (15).jpg";
import random16 from "./dayimages/randomshots/randomshot (16).jpg";
import random17 from "./dayimages/randomshots/randomshot (17).jpg";
import random18 from "./dayimages/randomshots/randomshot (18).jpg";
import random19 from "./dayimages/randomshots/randomshot (19).jpg";
import random20 from "./dayimages/randomshots/randomshot (20).jpg";
import random21 from "./dayimages/randomshots/randomshot (21).jpg";
import random22 from "./dayimages/randomshots/randomshot (22).jpg";
import random23 from "./dayimages/randomshots/randomshot (23).jpg";
import random24 from "./dayimages/randomshots/randomshot (24).jpg";
import random25 from "./dayimages/randomshots/randomshot (25).jpg";
import random26 from "./dayimages/randomshots/randomshot (26).jpg";
import random27 from "./dayimages/randomshots/randomshot (27).jpg";
import random28 from "./dayimages/randomshots/randomshot (28).jpg";
import random29 from "./dayimages/randomshots/randomshot (29).jpg";
import random30 from "./dayimages/randomshots/randomshot (30).jpg";
import random31 from "./dayimages/randomshots/randomshot (31).jpg";
import random32 from "./dayimages/randomshots/randomshot (32).jpg";
import random33 from "./dayimages/randomshots/randomshot (33).jpg";
import random34 from "./dayimages/randomshots/randomshot (34).jpg";
import random35 from "./dayimages/randomshots/randomshot (35).jpg";
import random36 from "./dayimages/randomshots/randomshot (36).jpg";
import random37 from "./dayimages/randomshots/randomshot (37).jpg";
import random38 from "./dayimages/randomshots/randomshot (38).jpg";
import random39 from "./dayimages/randomshots/randomshot (39).jpg";
import random40 from "./dayimages/randomshots/randomshot (40).jpg";
import random41 from "./dayimages/randomshots/randomshot (41).jpg";
import random42 from "./dayimages/randomshots/randomshot (42).jpg";
import random43 from "./dayimages/randomshots/randomshot (43).jpg";
import random44 from "./dayimages/randomshots/randomshot (44).jpg";
import random45 from "./dayimages/randomshots/randomshot (45).jpg";
import random46 from "./dayimages/randomshots/randomshot (46).jpg";
import random47 from "./dayimages/randomshots/randomshot (47).jpg";
import random48 from "./dayimages/randomshots/randomshot (48).jpg";
import random49 from "./dayimages/randomshots/randomshot (49).jpg";
import random50 from "./dayimages/randomshots/randomshot (50).jpg";
import random51 from "./dayimages/randomshots/randomshot (51).jpg";
import random52 from "./dayimages/randomshots/randomshot (52).jpg";
import random53 from "./dayimages/randomshots/randomshot (53).jpg";
import random54 from "./dayimages/randomshots/randomshot (54).jpg";
import random55 from "./dayimages/randomshots/randomshot (55).jpg";
import random56 from "./dayimages/randomshots/randomshot (56).jpg";
import random57 from "./dayimages/randomshots/randomshot (57).jpg";
import "./randomshots.css";

const Day7 = () => {
  const { day } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const shots = [
    { src: random1 }, { src: random2 }, { src: random3 }, { src: random4 }, { src: random5 },
    { src: random6 }, { src: random7 }, { src: random8 }, { src: random9 }, { src: random10 },
    { src: random11 }, { src: random12 }, { src: random13 }, { src: random14 }, { src: random15 },
    { src: random16 }, { src: random17 }, { src: random18 }, { src: random19 }, { src: random20 },
    { src: random21 }, { src: random22 }, { src: random23 }, { src: random24 }, { src: random25 },
    { src: random26 }, { src: random27 }, { src: random28 }, { src: random29 }, { src: random30 },
    { src: random31 }, { src: random32 }, { src: random33 }, { src: random34 }, { src: random35 },
    { src: random36 }, { src: random37 }, { src: random38 }, { src: random39 }, { src: random40 },
    { src: random41 }, { src: random42 }, { src: random43 }, { src: random44 }, { src: random45 },
    { src: random46 }, { src: random47 }, { src: random48 }, { src: random49 }, { src: random50 },
    { src: random51 }, { src: random52 }, { src: random53 }, { src: random54 }, { src: random55 },
    { src: random56 }, { src: random57 }
  ];

  return (
    <div className="day-page">
      <div className="day-content">
        <div className="text-right">
          <h1>RANDOM SHOTS</h1>
          <hr />
          <br />
          <p>
            A collection of spontaneous, funny, scenic, and personal moments captured throughout our whole tour — the unfiltered side of adventure.
          </p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="random-day-grid">
        {shots.map((img, index) => (
          <div className="random-image-block" key={index}>
            <LazyLoadImage src={img.src} alt={`Random Shot ${index + 1}`} effect="blur" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day7;
