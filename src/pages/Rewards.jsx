import React from "react";

import { Navbar, Footer } from "../components";

import bag from "../assets/images/bag-rewards.png";
import phone from "../assets/images/phone-rewards.png";
import laptop from "../assets/images/laptop-rewards.png";

export default function Rewards() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] flex flex-col justify-center items-center">
        <div className="w-full py-[2rem] flex flex-col items-center md:flex-row ">
          <img src={bag} alt="bag" className="md:w-[50%]" />
          <div className="flex flex-col justify-center items-center xl:px-[5rem]">
            <h1 className="text-[2rem] font-bold mb-[20px] text-center">
              Free Vacay Products
            </h1>
            <p>
              Experience the world like never before with Vacay Rewards! Unlock
              a realm of exclusive benefits, from luxurious room upgrades to
              personalized travel itineraries, ensuring your journey is nothing
              short of extraordinary. Enjoy VIP access to top attractions and
              events, all while benefiting from member-only discounts on
              accommodations and transportation. With Vacay Rewards, your
              vacations will be filled with unforgettable moments and seamless
              experiences. Elevate your travel adventures today and embark on a
              journey of endless rewards!
            </p>

            <button className="w-[150px] bg-black hover:bg-[#FE5A1D] text-white px-[16px] py-[10px] mt-[20px] rounded-lg cursor-pointer transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full py-[2rem] flex flex-col items-center md:flex-row">
          <img src={phone} alt="phone" className="md:w-full md:order-2 " />
          <div className="flex flex-col justify-center items-center md:order-1 xl:px-[5rem] ">
            <h1 className="text-[2rem] font-bold mb-[20px] text-center">
              Download our App
            </h1>
            <p>
              Download the Vacay App now and open the door to a world of
              incredible rewards and unparalleled travel experiences! By simply
              installing our app, you'll gain access to a treasure trove of
              exclusive perks, from discounted hotel stays to priority access at
              popular tourist attractions.
              <br />
              <br />
              Earn points with every booking and unlock a realm of
              possibilities, such as complimentary room upgrades and
              personalized travel recommendations tailored to your preferences.
              With the Vacay App in your pocket, every adventure becomes an
              opportunity to earn and enjoy remarkable rewards. Don't miss out –
              download the Vacay App today and start collecting your rewards
              while exploring the globe!
            </p>
            <button className="w-[150px] bg-black hover:bg-[#FE5A1D] text-white px-[16px] py-[10px] mt-[20px] rounded-lg cursor-pointer transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full py-[2rem] flex flex-col items-center md:flex-row">
          <img src={laptop} alt="laptop" className="md:w-[50%]" />
          <div className="flex flex-col justify-center items-center xl:px-[5rem]  ">
            <h1 className="text-[2rem] font-bold mb-[20px] text-center ">
              Visit Our Page
            </h1>
            <p>
              Explore our Vacay page on social media and open the door to
              exciting rewards! By simply visiting our page, you're unlocking a
              world of exclusive benefits that enhance your travel experience.
              Join us online and let the journey to extraordinary rewards begin!
            </p>
            <button className="w-[150px] bg-black hover:bg-[#FE5A1D] text-white px-[16px] py-[10px] mt-[20px] rounded-lg cursor-pointer transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
