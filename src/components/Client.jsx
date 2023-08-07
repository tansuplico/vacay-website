import React, { useRef } from "react";

import face1 from "../assets/images/face-1.png";
import face2 from "../assets/images/face-2.png";
import face3 from "../assets/images/face-3.png";

export default function Client() {
  return (
    <div className="w-full flex py-[5rem] flex-col items-center bg-[#F2F3F4]">
      <h1 className="text-[1.5rem]"> What our client say</h1>

      <div className="w-[90%] h-full grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="w-full py-5 flex flex-col justify-center items-center bg-white rounded-[2rem] shadow-xl">
          <div>
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={face1}
              alt="face-1"
            />
          </div>

          <div className="p-3 text-center">
            <p>
              I recently had an incredible experience using this hotel booking
              website. The user-friendly interface made it a breeze to find my
              perfect vacation spot, and the detailed filters ensured that I
              could customize my search according to my preferences.
            </p>
          </div>
        </div>

        <div className="w-full py-5 flex flex-col justify-center items-center bg-white rounded-[2rem] shadow-xl">
          <div>
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={face2}
              alt="face-2"
            />
          </div>

          <div className="p-3 text-center">
            <p>
              The wide variety of options available, coupled with the seamless
              booking process, left me truly impressed. I can confidently say
              that this website has become my go-to platform for all future
              travel plans.
            </p>
          </div>
        </div>

        <div className="w-full py-5 flex flex-col justify-center items-center bg-white rounded-[2rem] shadow-xl">
          <div>
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={face3}
              alt="face-3"
            />
          </div>

          <div className="p-3 text-center">
            <p>
              As a frequent traveler, I was pleasantly surprised by the
              exceptional service provided by this hotel booking website. The
              hassle-free navigation and real-time availability updates made the
              entire booking process a breeze.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
