import React from "react";
// eslint-disable-next-line
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import SPDEMO from "./assets/SPDEMO.jpg";
import img1 from './assets/1 (2).png';
import img2 from './assets/1 (3).png';
import img3 from './assets/1 (4).png';
import img4 from './assets/1 (5).png';
import img5 from './assets/1 (6).png';
import img6 from './assets/1 (7).png';
import img7 from './assets/1 (13).png';
import img8 from './assets/1 (9).png';
import img9 from './assets/1 (10).png';
import img10 from './assets/1 (11).png';
import img11 from './assets/1 (12).png';
import img12 from './assets/1 (13).png';
import img13 from './assets/1 (14).png';
import img14 from './assets/1 (15).jpg';
import img15 from './assets/1 (16).jpg';
import img16 from './assets/1 (17).jpg';
import img17 from './assets/1 (18).jpg';
import img18 from './assets/1 (19).jpg';
import img19 from './assets/1 (20).png';
import img20 from './assets/1 (21).png';
import img21 from './assets/1 (22).png';
import img22 from './assets/1 (23).png';
import img23 from './assets/1 (24).png';
import img24 from './assets/1 (25).png';


const Photo = styled.img`
  width: 368px;
  height: 150px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
`;

const RecentWork = () => {
  // Create an array containing references to the SPDEMO image
  /* const photos = times(10, () => img1); */
  const photos=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24];
  return (
    <div className="bg-[#000515] pb-12">
      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#FFFFFF] text-2xl font-bold	 " >
        RECENT WORKS
      </h1>

      <span className="text-black text-base font-bold text-center mb-20">
        <p>Lorem Lorem Lorem Lorem Lorem </p>{" "}
      </span>

      <div className="bg-[#000515] py-8 max-w-full" >
        {/* First Slide */}
        <div style={{ height: 180 }}>
          <Marquee velocity={15}>
            {photos.map((photo, id) => (
              <Photo
                src={photo}
                key={`marquee-recentwork-${id}`}
                style={{
                  marginLeft: "30px",
                }}
              />
            ))}
          </Marquee>
        </div>

        {/* ==================================  Second Slide (left  to right) */}
        <div style={{ height: 180 }}>
          <Marquee velocity={15} direction="ltr">
            {photos.map((photo, id) => (
              <Photo
                src={photo}
                key={`marquee-recentwork-${id}`}
                style={{
                  marginLeft: "30px",
                }}
              />
            ))}
          </Marquee>
        </div>

        {/* ===========================================  Third Slide */}
        <div style={{ height: 180 }}>
          <Marquee velocity={15}>
            {photos.map((photo, id) => (
              <Photo
                src={photo}
                key={`marquee-recentwork-${id}`}
                style={{
                  marginLeft: "30px",
                }}
              />
            ))}
          </Marquee>
        </div>

        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default RecentWork;
