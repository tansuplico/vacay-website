import React from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import hotelsData from "../api/hotelsData";

export default function Popular() {
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

  const highestRatedHotels = Object.values(
    data.reduce((result, currHotel) => {
      const { country, ratings } = currHotel;

      if (!result[country] || ratings > result[country].ratings) {
        result[country] = currHotel;
      }

      return result;
    }, {})
  );

  const popularHotelsJsx = highestRatedHotels.map((data) => {
    return (
      <Link to={`/hotels/${data.id}`} key={data.id} state={{ hotel: data }}>
        <div
          className="w-full flex flex-col rounded-[2rem] shadow-xl mt-10  overflow-hidden "
          key={data.id}
        >
          <div className="overflow-hidden">
            <img
              className="w-full h-[200px] rounded-t-[1rem] cursor-pointer hover:scale-110 transition "
              src={data.images.thumbnail}
              alt="sample"
            />
          </div>

          <div className="w-full p-4 flex flex-col rounded-b-[1rem]">
            <div className="flex items-center justify-between">
              <h2 className="font-bold truncate">{data.name}</h2>{" "}
              <h2 className="font-bold">${data.price}</h2>
            </div>
            <span>{data.country}</span>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="w-[90%]  pb-[5rem] flex flex-col items-center form:mt-[3rem] lg:m-0 ">
      <h1 className="text-[1.5rem]"> Popular Hotels </h1>
      <div className="w-full h-full gap-5 grid popular:grid-cols-2 lg:grid-cols-3 items-center">
        {popularHotelsJsx}
      </div>
    </div>
  );
}
