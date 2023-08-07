import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import sliderImages from "../api/sliders";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  const [slideToShow, setSlideToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newSlideToShow =
        window.innerWidth < 550 ? 1 : window.innerWidth < 768 ? 2 : slideToShow;
      setSlideToShow(newSlideToShow);
    };

    handleResize();

    // add Event listener for window resize
    window.addEventListener("resize", handleResize);

    // clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  function sliderGoTo(slideCountry) {
    navigate("/hotels", { state: { country: slideCountry } });
  }

  return (
    <div className="w-[90%] pt-[2rem] pb-[5rem] mt-[10rem] form:mt-[3rem] lg:mt-0 flex flex-col justify-center items-center ">
      <h1 className="text-[1.5rem] mb-10">Popular Countries</h1>
      <Swiper
        slidesPerView={slideToShow}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[280px] flex flex-col "
      >
        {sliderImages.map((data) => {
          return (
            <SwiperSlide key={data.key}>
              <div
                style={{ backgroundImage: `url(${data.image})` }}
                className="w-full h-[230px] flex flex-col justify-center items-center rounded-[2rem] shadow-xl cursor-pointer bg-center bg-cover"
                onClick={() => sliderGoTo(data.country)}
              >
                <div>
                  <h1 className="text-white text-[2.5rem]"> {data.country} </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
