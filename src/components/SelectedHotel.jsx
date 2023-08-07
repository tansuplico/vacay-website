import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { Navbar, Footer } from "../components";

import house from "../assets/images/home.png";
import broom from "../assets/images/broom.png";
import location from "../assets/images/location.png";
import heart from "../assets/images/heart.png";

import check from "../assets/images/check.png";
import x from "../assets/images/x.png";

export default function SelectedHotel() {
  const { id } = useParams(); // Retrieve the hotel ID from URL parameters
  const { state } = useLocation();

  // Find the selected hotel based on the id
  const selectedHotel = state?.hotel || {};

  const [modalClicked, setModalClicked] = useState(false);
  const [roomRented, setRoomRented] = useState(false);

  function handleModal() {
    setModalClicked((val) => !val);
  }

  function exitModal() {
    setModalClicked(false);
    setRoomRented(false);
  }

  function roomRent() {
    setRoomRented(true);
  }

  return (
    <>
      <Navbar />
      <div className="w-[80%] ">
        <div className="w-full flex flex-col py-[2rem]">
          <h1 className="font-bold text-[1.5rem] mb-[10px]">
            {selectedHotel.name}
          </h1>
          <div className="flex gap-5">
            <span className="text-[.8rem]"> {selectedHotel.ratings} / 10</span>
            <span className="text-[.8rem]">
              {selectedHotel.reviews} reviews
            </span>
          </div>
          <span className="text-[.8rem]">
            Location: {selectedHotel.location}
          </span>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-4">
          <img
            className="h-full col-span-2 row-span-2 rounded-[.7rem] "
            src={selectedHotel.images.large}
            alt=""
          />
          <img
            className="h-full rounded-[.7rem]"
            src={selectedHotel.images.small1}
            alt=""
          />
          <img
            className="h-full rounded-[.7rem]"
            src={selectedHotel.images.small2}
            alt=""
          />
          <img
            className="h-full rounded-[.7rem]"
            src={selectedHotel.images.small3}
            alt=""
          />
          <img
            className="h-full rounded-[.7rem]"
            src={selectedHotel.images.small4}
            alt=""
          />
        </div>
        <div className="w-full mt-[20px]">
          <h1 className="text-[1.3rem]">
            {" "}
            Entire rental unit hosted by Brandon{" "}
          </h1>
          <div className="flex gap-3">
            <span> {selectedHotel.guests} Guests </span>{" "}
            <span> {selectedHotel.beds} beds </span>{" "}
            <span> {selectedHotel.bathrooms} bathrooms </span>
          </div>
          <h1 className="font-bold"> $ 100 / Day </h1>
        </div>

        <div className="w-full px-5 py-[2rem] md:px-0">
          <form className="shadow-form px-5 py-[2rem] flex flex-col gap-3 md:flex-row">
            <div>
              <label htmlFor="check-in"> Check-in </label>
              <input
                type="date"
                id="check-in"
                className="w-full focus:ring-0 border-none"
              />
            </div>

            <div>
              <label htmlFor="check-out"> Check-out </label>
              <input
                type="date"
                id="check-out"
                className="w-full focus:ring-0 border-none"
              />
            </div>

            <div>
              <label htmlFor="guests"> Guests </label>
              <input
                type="number"
                id="guests"
                className="w-full placeholder:text-black focus:ring-0 border-none"
                placeholder="Add Guests"
              />
            </div>

            <div
              className="w-full rounded-lg lg:w-3/4 xl:w-2/4 bg-[#FF4F00] text-white py-3 cursor-pointer flex justify-center items-center"
              onClick={handleModal}
            >
              Check Availability{" "}
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-5 py-[2rem] ">
          <div className="flex">
            <div className="w-[15%] md:w-[10%] lg:w-[5%]">
              <img src={house} alt="" className="w-[25px] h-[25px] " />
            </div>
            <div className=" w-full flex flex-col">
              <h1 className="text-[1.2rem]"> Entire Home </h1>
              <p className="text-[.7rem]">
                Feel free to relax and make yourself at home
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[15%] md:w-[10%] lg:w-[5%]">
              <img src={broom} alt="" className="w-[25px] h-[25px] " />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-[1.2rem]"> Enhanced Clean </h1>
              <p className="text-[.7rem]">
                Stay in a newly cleaned and sanitize room
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[15%] md:w-[10%] lg:w-[5%]">
              <img src={location} alt="" className="w-[25px] h-[25px] " />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-[1.2rem]"> Great Location </h1>
              <p className="text-[.7rem]">
                Enjoy the stunning view and landscape of the city / nature
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[15%] md:w-[10%] lg:w-[5%]">
              <img src={heart} alt="" className="w-[25px] h-[25px] " />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-[1.2rem]"> Great Check-in Experience </h1>
              <p className="text-[.7rem]">
                Have a approachable and wonderful community
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-[2rem] flex flex-col justify-center items-center">
          <p className="text-[.8rem]"> {selectedHotel.description}</p>
        </div>

        <div className="w-full py-[2rem] flex flex-col">
          <h1 className="text-[1.2rem] font-bold mb-[20px]">Location on map</h1>

          <iframe
            src={selectedHotel.maps}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />

      {modalClicked ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="w-[80%] lg:w-[50%] h-[300px] flex flex-col justify-center items-center text-center bg-white rounded-lg relative">
            {roomRented ? (
              <>
                <img
                  src={x}
                  alt="x"
                  className="w-[30px] h-[30px] absolute top-5 right-5 cursor-pointer"
                  onClick={exitModal}
                />
                <h1 className="text-[2rem] font-bold text-[#32CD32] mb-[10px]">
                  Your booking has been verified
                </h1>
                <p> See you there! </p>
              </>
            ) : (
              <>
                <img src={check} alt="check" className="w-[80px] h-[80px]" />
                <h1> This room is available </h1>
                <p className="text-[.9rem] mt-[10px]">
                  Please click below if you want to check in
                </p>
                <div className="flex gap-5">
                  <button
                    className="px-[16px] py-[9px] bg-red-500 rounded-lg mt-[20px] transition text-white hover:bg-red-600"
                    onClick={exitModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-[16px] py-[9px] bg-[#32CD32] rounded-lg mt-[20px] transition text-white hover:bg-[#4CBB17]"
                    onClick={roomRent}
                  >
                    Check In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
