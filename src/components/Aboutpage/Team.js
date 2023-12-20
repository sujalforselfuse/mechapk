import React from "react";
import Teambg from "./assets/Teambg.png";

import siddharth from './assets/siddharth.jpeg';
import ashutosh from './assets/ashutosh.jpeg';
import mukul from './assets/mukul.jpeg';
import nishant from './assets/nishant.jpeg';
import madhvendra from './assets/madhvendra.jpeg';
import rahul from './assets/rahul.jpeg'
const Team = () => {
  const bgStyle = {
    backgroundImage: `url(${Teambg})`,
  };

  return (
    <>
      <div style={bgStyle} className="overflow-x-hidden  mr-0 w-full">
        <h1 className="text-[#F31D32] bg-[#F9F9F9] h-[60px] text-3xl font-bold text-center  py-2 uppercase ">
          MEET THE TEAM
        </h1>
        {/* Container */}

        <div
          className="relative my-4 w-[300px] "
          style={{
            borderLeft: "solid transparent",
            borderRight: "50px solid transparent",
            borderTop: "60px solid #909090",
          }}
        >
          <div className="absolute top-[-35px] transform -translate-y-1/2 left-1/2  -translate-x-1/2  justify-center items-center content-center place-items-center w-full ml-3 ">
            <h1 className="text-white font-bold text-2xl">
              Engines of Company
            </h1>
          </div>
        </div>

        {/* ========================================================================  */}

        <div className="p-5 container mx-auto">
          {/* Section 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center  items-center content-center place-items-center">
            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full object-cover rounded-t h-80 "
                  src={siddharth}
                  alt="siddharth"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">SIDDHARTH</span>{" "}
                  <span className="text-base">DUBEY </span>
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Co-Founder & Director
                </h1>
                <p>
                  {" "}
                  Handle all tasks related to business development, proper supply chain, workflow, Business Expansion, strategy making, etc {" "}
                </p>
              </div>
            </div>
            {/* Card end */}

            {/* Repeat the card structure for other items */}


            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full object-cover rounded-t h-80 "
                  src={nishant}
                  alt="Nishant's Image"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">NISHANT</span>{" "}
                  <span className="text-base">KUMAR SINGH </span>
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Co-Founder & Director
                </h1>
                <p>
                  {" "}
                  Handle all tasks related to Product Market Fit, CRM Business Development, Operations, strategy-making, etc.{" "}
                </p>
              </div>
            </div>
            {/* Card end */}
          </div>
        </div>

        {/* Section 2 */}

        <div className=" flex justify-end">
          <div
            className="relative my-4 w-[500px]   "
            style={{
              borderLeft: "50px solid transparent",
              borderRight: "solid transparent",
              borderTop: "50px solid #909090",
            }}
          >
            <div className="absolute top-[-28px] transform -translate-y-1/2 left-1/2  -translate-x-1/2  justify-center items-center content-center place-items-center w-full ml-3 ">
              <h1 className="text-white font-bold text-2xl">
                4 Wheels That Drives The Company
              </h1>
            </div>
          </div>
        </div>

        <div className="p-5 container mx-auto">
          {/* Section 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center content-center place-items-center">
            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full rounded-t h-80 "
                  src={mukul}
                  alt="Mukul"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">MUKUL</span>{" "}
                  <span className="text-base">KUMAR RAJAK </span>
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Founder's Office
                </h1>
                <p>
                  {" "}
                  Handle all field-related challenges like Vendor Management, Data Mining collaboration, etc{" "}
                </p>
              </div>
            </div>
            {/* Card end */}

            {/* Repeat the card structure for other items */}

            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full object-cover rounded-t h-80 "
                  src={ashutosh}
                  alt="Ashutosh's Image"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">ASHUTOSH</span>{" "}
                  <span className="text-base">AMBAGADE</span>
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Research & Development Head
                </h1>
                <p>
                  {" "}
                  Manage all Research & development-related tasks like Data Analysis, Product Development etc.{" "}
                </p>
              </div>
            </div>
            {/* Card end */}


            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full object-cover rounded-t h-80 "
                  src={madhvendra}
                  alt="Madhvendra's Image"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">MADHVENDRA</span>{" "}
                  <span className="text-base">PRATAP SINGH </span>
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Operations Head
                </h1>
                <p>
                  {" "}
                  Handle all types of management-related tasks like Hiring, Social Media, Growth Analysis, etc {" "}
                </p>
              </div>
            </div>
            {/* Card end */}

            {/* card */}
            <div className="bg-white h-full w-60 relative">
              {/* Added 'relative' class */}
              <div>
                <img
                  className="w-full object-cover rounded-t h-80 "
                  src={rahul}
                  alt="rahul's Image"
                />{" "}
                {/* Added 'alt' attribute for accessibility */}
              </div>
              <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mt-10 text-2xl text-white">
                  <span className="text-2xl">RAHUL</span>{" "}
                  <span className="text-base">KORI </span>
                  
                </h1>
              </div>
              {/* icon */}
              <div className="absolute top-[284px] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white flex items-center justify-center rounded-full h-24 w-24">
                  <span className="bg-[#4DE7E9] object-cover rounded-full h-20 w-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="48"
                      viewBox="0 0 38 27"
                      fill="none"
                    >
                      <path
                        d="M6.20063 11.4169C8.23791 11.4169 9.89428 9.76052 9.89428 7.72324C9.89428 5.68596 8.23791 4.02959 6.20063 4.02959C4.16335 4.02959 2.50698 5.68596 2.50698 7.72324C2.50698 9.76052 4.16335 11.4169 6.20063 11.4169ZM32.0562 11.4169C34.0935 11.4169 35.7498 9.76052 35.7498 7.72324C35.7498 5.68596 34.0935 4.02959 32.0562 4.02959C30.0189 4.02959 28.3625 5.68596 28.3625 7.72324C28.3625 9.76052 30.0189 11.4169 32.0562 11.4169ZM33.903 13.2637H30.2094C29.1936 13.2637 28.276 13.6735 27.6065 14.3372C29.9323 15.6126 31.5829 17.9154 31.9408 20.651H35.7498C36.7714 20.651 37.5967 19.8257 37.5967 18.8042V16.9574C37.5967 14.9201 35.9403 13.2637 33.903 13.2637ZM19.1284 13.2637C22.7009 13.2637 25.5923 10.3723 25.5923 6.79983C25.5923 3.22737 22.7009 0.335938 19.1284 0.335938C15.556 0.335938 12.6645 3.22737 12.6645 6.79983C12.6645 10.3723 15.556 13.2637 19.1284 13.2637ZM23.5608 15.1105H23.0818C21.8813 15.6877 20.5482 16.034 19.1284 16.034C17.7087 16.034 16.3813 15.6877 15.175 15.1105H14.696C11.0255 15.1105 8.04746 18.0885 8.04746 21.7591V23.4213C8.04746 24.9507 9.28829 26.1915 10.8177 26.1915H27.4391C28.9685 26.1915 30.2094 24.9507 30.2094 23.4213V21.7591C30.2094 18.0885 27.2313 15.1105 23.5608 15.1105ZM10.6503 14.3372C9.98085 13.6735 9.06321 13.2637 8.04746 13.2637H4.35381C2.31653 13.2637 0.660156 14.9201 0.660156 16.9574V18.8042C0.660156 19.8257 1.48546 20.651 2.50698 20.651H6.31029C6.67388 17.9154 8.32448 15.6126 10.6503 14.3372Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* icon end */}
              <div className="h-5 w-full">{""}</div>
              <div className="p-4 ">
                <h1 className="mt-5 text-2xl text-[#FF4457] ">
                  {" "}
                  Tech Head
                </h1>
                <p>
                  {" "}
                  Handle all Tech related channels like Web Development. App Development. etc{" "}
                </p>
              </div>
            </div>
            {/* Card end */}
          </div>
        </div>



      </div>
    </>
  );
};

export default Team;
