import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import hotelsData from "../api/hotelsData";

import { Link } from "react-router-dom";

export default function Lists(props) {
  const [formOptions, setFormOptions] = useState({
    hasGym: false,
    hasWifi: false,
    hasPool: false,
    hasKitchen: false,
    hasAircon: false,
    hasBalcony: false,
    two: false,
    three: false,
    four: false,
  });

  function handleOptions(option) {
    setFormOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  }

  const { data, isLoading, error } = useQuery(
    ["hotels"],
    () => {
      return new Promise((resolve) => {
        resolve(hotelsData);
      });
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }

  const listElements = data
    .filter(
      (hotels) =>
        hotels.country ===
          (!props.location
            ? !props.country
              ? hotels.country
              : props.country
            : props.location) &&
        (formOptions.hasGym ? hotels.gym : true) &&
        (formOptions.hasPool ? hotels.pool : true) &&
        (formOptions.hasWifi ? hotels.wifi : true) &&
        (formOptions.hasKitchen ? hotels.kitchen : true) &&
        (formOptions.hasAircon ? hotels.aircon : true) &&
        (formOptions.hasBalcony ? hotels.balcony : true) &&
        (formOptions.two ? hotels.guests === 2 : true) &&
        (formOptions.three ? hotels.guests === 3 : true) &&
        (formOptions.four ? hotels.guests === 4 : true)
    )
    .map((h) => {
      return (
        <Link to={`/hotels/${h.id}`} key={h.id} state={{ hotel: h }}>
          <div
            className="w-full md:w-full pb-3 border-slate-300 border-solid border-b-2 "
            key={h.id}
          >
            <div className="w-full flex flex-col lg:flex-row rounded-[1rem]  ">
              <div className="md:w-full lg:w-[60%]  ">
                <img
                  src={h.images.thumbnail}
                  alt=""
                  className=" rounded-t-[2rem] md:rounded-[1rem] md:h-full"
                />
              </div>
              <div className="p-4 w-full  ">
                <span className="text-[.7rem]  lg:text-[.7rem]">
                  {h.location}
                </span>
                <h1 className="font-bold ">{h.name}</h1>
                <span className="text-[.9rem] lg:text-[.9rem]">
                  {h.beds} Bedroom / {h.kitchen ? "1 Kitchen" : "No Kitchen"} /{" "}
                  {h.bathrooms} Restroom
                </span>
                <div className="flex gap-5">
                  <h6> {h.reviews} reviews</h6>
                  <h6> {h.ratings} / 10</h6>
                </div>

                <div className="w-full mt-[30px] flex flex-col items-end  ">
                  <span> {h.guests} Guests </span>
                  <h1 className="font-bold"> $ {h.price} / Day </h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div className="w-[90%]  flex flex-col md:flex-row justify-center ">
      <div className="w-full md:px-5 flex flex-col justify-center items-center gap-5 ">
        <div className="w-full md:flex md:flex-col mb-3">
          <div className="w-full py-5 border-b-2 border-solid border-gray">
            <span className="text-slate-500"> 30+ Options </span>
            <h1 className="text-[1.3rem] font-bold ">
              {listElements.length > 0
                ? `Recommended Places in
              ${
                !props.country
                  ? !props.location
                    ? " the World"
                    : props.location
                  : props.country
              }`
                : "No Hotels Found"}
            </h1>
          </div>
        </div>
        <div className="h-[430px] overflow-y-scroll hide-scrollbar ">
          {listElements.length > 0 ? listElements : <h1> No Hotels Found </h1>}
        </div>
      </div>

      <div className="w-full  h-full p-5 md:w-[60%] lg:w-[45%] lg:mt-[30px]">
        <form className="w-full p-5 flex flex-col  rounded-lg ">
          <h1 className="text-[1.2rem] mb-5 font-bold"> Select Filters </h1>
          <h1 className="text-[1rem] mb-1 font-bold"> Amenities </h1>
          <div className="flex flex-col items-center ">
            <div className="w-full flex justify-between ">
              <label htmlFor="gym"> Gym </label>
              <input
                type="checkbox"
                id="gym"
                value={formOptions.hasGym}
                onChange={() => handleOptions("hasGym")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              <label htmlFor="wifi"> Free Wifi </label>
              <input
                type="checkbox"
                id="wifi"
                value={formOptions.hasWifi}
                onChange={() => handleOptions("hasWifi")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              {" "}
              <label htmlFor="pool"> Pool </label>
              <input
                type="checkbox"
                id="pool"
                value={formOptions.hasPool}
                onChange={() => handleOptions("hasPool")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              {" "}
              <label htmlFor="kitchen"> Kitchen </label>
              <input
                type="checkbox"
                id="kitchen"
                value={formOptions.hasKitchen}
                onChange={() => handleOptions("hasKitchen")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              {" "}
              <label htmlFor="aircon"> Air Conditioning </label>
              <input
                type="checkbox"
                id="aircon"
                value={formOptions.hasAircon}
                onChange={() => handleOptions("hasAircon")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              <label htmlFor="balcony"> Balcony </label>
              <input
                type="checkbox"
                id="balcony"
                value={formOptions.hasBalcony}
                onChange={() => handleOptions("hasBalconys")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
          </div>
          <h1 className="text-[1rem] my-2 font-bold"> Max. Guests </h1>
          <div className="flex flex-col items-center ">
            <div className="w-full flex justify-between ">
              <label htmlFor="two"> Two </label>
              <input
                type="checkbox"
                id="two"
                name="guests"
                value={formOptions.two}
                onChange={() => handleOptions("two")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              {" "}
              <label htmlFor="three"> Three </label>
              <input
                type="checkbox"
                id="three"
                name="guests"
                value={formOptions.three}
                onChange={() => handleOptions("three")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
            <div className="w-full flex justify-between ">
              <label htmlFor="one"> Four </label>
              <input
                type="checkbox"
                id="four"
                name="guests"
                value={formOptions.four}
                onChange={() => handleOptions("four")}
                className="checked:bg-black focus:ring-0"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
