import React, { useState } from "react";

import beach from "../assets/images/banner-beach.jpg";
import search from "../assets/images/banner-search.png";
import { Link, useNavigate } from "react-router-dom";
const Banner = () => {
  const [bannerLocation, setBannerLocation] = useState("");
  const [bannerGuests, setBannerGuests] = useState(null);

  return (
    <div className="w-[90%] mx-[8rem] mt-[15px] pb-[10rem]">
      <div
        className="w-full rounded-[30px] min-h-[550px] bg-center bg-cover bg-no-repeat flex flex-col items-start justify-center relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(44, 56, 85, 0.9), rgba(100, 125, 187, 0.1)), url(${beach})`,
        }}
      >
        <div className="ml-[5%] mb-[10%] text-white">
          <h1 className="text-[2.7rem] font-bold md:text-[3.5rem] lg:w-[70%]">
            Enjoy Your Dream Vacation
          </h1>
          <span> Book Hotels and Explore the world at the lowest price </span>
        </div>
        <div className="w-[85%] h-[370px] form:h-[200px] lg:h-[120px] px-5 lg:px-8 py-[4rem] form:py-[20px] backdrop-blur-sm bg-[#F0F8FF]/80 rounded-[30px] absolute bottom-[-15rem] form:bottom-[-8rem] lg:bottom-[-3rem] left-[8%] flex justify-center items-center ">
          <form className="w-full py-5 rounded-[30px] grid  justify-center items-center gap-5  form:grid-cols-7 ">
            <div className="col-span-3 lg:flex gap-5  ">
              <div className="w-full h-[48px] mb-[10px] ">
                <div>
                  <input
                    required=""
                    type="text"
                    id="myInput"
                    className="input-banner"
                    placeholder="Location"
                    onChange={(e) => setBannerLocation(e.target.value)}
                  />
                </div>
                <p className="text-[.7rem]">Where are you going?</p>
              </div>

              <div className="w-full h-[48px] ">
                <div>
                  <input
                    required=""
                    type="date"
                    id="myInput"
                    className="input-banner "
                    placeholder="Check In"
                  />
                </div>
                <p className="text-[.7rem]">Add date</p>
              </div>
            </div>

            <div className="col-span-3 lg:flex gap-5 ">
              <div className="w-full h-[48px] mb-[10px]">
                <div>
                  <input
                    required=""
                    type="date"
                    id="myInput"
                    className="input-banner"
                    placeholder="Check Out"
                  />
                </div>
                <p className="text-[.7rem]">Add date</p>
              </div>

              <div className="w-full h-[48px] ">
                <div>
                  <input
                    required=""
                    type="number"
                    min="2"
                    max="4"
                    id="myInput"
                    className="input-banner"
                    placeholder="Guests"
                    onChange={(e) => setBannerGuests(e.target.value)}
                  />
                </div>
                <p className="text-[.7rem]">Add guests</p>
              </div>
            </div>

            <Link
              to="/hotels"
              state={{ location: bannerLocation, guests: bannerGuests }}
            >
              <div className=" w-[45px] h-[45px] lg:ml-[30px] rounded-3xl flex justify-center items-center cursor-pointer hover:bg-slate-100 transition col-span-3">
                <img className="w-[30px] h-[30px]" src={search} alt="search" />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
