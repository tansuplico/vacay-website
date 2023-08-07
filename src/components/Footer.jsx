import React, { useState } from "react";

import downArrow from "../assets/images/arrow-down.png";

export default function Footer() {
  const [isClicked, setIsClicked] = useState(null);

  function navDrop(index) {
    if (isClicked === index) {
      return setIsClicked(null);
    }

    setIsClicked(index);
  }

  return (
    <footer className="w-full  py-[2rem] px-[1rem] bg-[#F8F8FF] lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[80%] grid gap-5 md:grid-cols-4 md:gap-10">
        <div className=" border-b-2">
          <div className="flex justify-between items-center md:justify-start">
            <h1 className="text-[1.3rem] font-bold  mb-3 "> Vacay.com </h1>
            <img
              className="w-[30px] h-[30px] cursor-pointer md:hidden"
              src={downArrow}
              alt="arrow-down"
              onClick={() => navDrop(1)}
            />
          </div>

          <div
            className={`${isClicked === 1 ? "block" : "hidden"} 
            md:block md:text-[.7rem]
           transition-all duration-1000`}
          >
            <p>
              Experience the ultimate in travel convenience with Vacay.com –
              your go-to destination for seamless hotel bookings. Discover a
              world of unparalleled comfort and luxury as you explore an
              extensive selection of top-notch accommodations tailored to your
              preferences.
              <br />
              <br />
              Our user-friendly interface ensures effortless navigation and
              swift reservations, empowering you to unlock unforgettable
              journeys with just a few clicks. Join us at Vacay.com and embark
              on a new era of travel, where exceptional stays are just a
              reservation away.
            </p>
          </div>
        </div>
        <div className="item border-b-2">
          <div className="flex justify-between items-center md:justify-start">
            <h1 className="text-[1.3rem] font-bold  mb-3 "> Company </h1>
            <img
              className="w-[30px] h-[30px] cursor-pointer md:hidden"
              src={downArrow}
              alt="arrow-down"
              onClick={() => navDrop(2)}
            />
          </div>

          <div className="transition-all duration-500 ">
            <ul
              className={`${
                isClicked === 2 ? "block" : "hidden"
              } md:flex flex-col gap-1 `}
            >
              <li>About Us</li>
              <li>Our Team</li>
              <li>Blog</li>
              <li>Book</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="item border-b-2">
          <div className="flex justify-between items-center md:justify-start">
            <h1 className="text-[1.3rem] font-bold  mb-3 "> Legal </h1>
            <img
              className="w-[30px] h-[30px] cursor-pointer md:hidden"
              src={downArrow}
              alt="arrow-down"
              onClick={() => navDrop(3)}
            />
          </div>

          <div className="transition-all duration-500 ">
            <ul
              className={`${
                isClicked === 3 ? "block" : "hidden"
              } md:flex flex-col gap-1`}
            >
              <li>Help Center</li>
              <li>Privacy and Policy</li>
              <li>Terms and Condition</li>
              <li>Legal Documents</li>
              <li>Assistance</li>
            </ul>
          </div>
        </div>

        <div className="item border-b-2">
          <div className="flex justify-between items-center md:justify-start">
            <h1 className="text-[1.3rem] font-bold mb-3 "> Resources </h1>
            <img
              className="w-[30px] h-[30px] cursor-pointer md:hidden"
              src={downArrow}
              alt="arrow-down"
              onClick={() => navDrop(4)}
            />
          </div>

          <div className="transition-all duration-500 ">
            <ul
              className={`${
                isClicked === 4 ? "block" : "hidden"
              } md:flex flex-col gap-1`}
            >
              <li>Owners</li>
              <li>Investors Relation</li>
              <li>Advertisors</li>
            </ul>
          </div>
        </div>
        <p className="text-[.3rem] text-gray-400 md:text-[.7rem] md:col-span-4">
          Copyright © 2023 Vacay.com. All rights reserved. Unauthorized use or
          reproduction of the content is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}
