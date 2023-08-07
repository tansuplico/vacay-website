import React, { useState } from "react";

import menuBar from "../assets/images/menu-bar.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  function showMenu() {
    setMenuClicked((val) => !val);
  }

  return (
    <>
      <header className="w-full items-center shadow-md">
        <nav className="flex justify-between px-[1rem] py-[2rem] md:px-[7%]">
          <span className="font-bold text-xl"> Vacay.com </span>
          <img
            src={menuBar}
            alt="menu"
            className="w-[25px] h-[25px] md:hidden
          "
            onClick={showMenu}
          />
          <ul className="hidden gap-[20px] md:flex ">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/hotels">
              <li>Hotels</li>
            </NavLink>
            <NavLink to="/rewards">
              <li>Rewards</li>
            </NavLink>
          </ul>
        </nav>
      </header>

      <div
        className={`absolute transition-all ${
          menuClicked ? "left-0" : "left-[-100%]"
        }  top-[90px] w-full h-full flex flex-col justify-center items-center  bg-white`}
      >
        <ul className="w-full gap-[20px] flex flex-col mb-[30%] justify-center items-center  ">
          <NavLink to="/">
            <li className="w-full text-[2rem] ">Home</li>
          </NavLink>
          <NavLink to="/hotels">
            <li className="text-[2rem]">Hotels</li>
          </NavLink>
          <NavLink to="/rewards">
            <li className="text-[2rem]">Rewards</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
