import React from "react";

import { Link } from "react-router-dom";

export default function Discount() {
  return (
    <div className="w-[90%] py-[5rem] flex flex-col justify-center items-center ">
      <div className="w-full p-10 flex flex-col justify-center items-center rounded-[2rem] shadow-2xl bg-[#FEFEFA]  ">
        <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[30%]  text-center  ">
          <span className="text-[.7rem]"> 100+ Discount Codes </span>
          <h1 className="text-[1.5rem] text-[#333333] font-bold ">
            Join rewards and discover amazing discounts on your booking
          </h1>
          <Link to="/rewards">
            <button className="w-[150px] py-[5px] px-[16px] mt-[10px] rounded-lg bg-[#FF4F00] text-white ">
              Join Rewards
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
