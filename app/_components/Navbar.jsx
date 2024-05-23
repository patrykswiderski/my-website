"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseNav = (event) => {
    if (event.key === "Escape" || (nav && !event.target.closest(".nav-menu"))) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleCloseNav);
    document.addEventListener("click", handleCloseNav);

    return () => {
      document.removeEventListener("keydown", handleCloseNav);
      document.removeEventListener("click", handleCloseNav);
    };
  }, [nav]);

  const cssClassSm = "p-5 transform transition-transform hover:scale-110";
  const cssClassLg =
    "p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-pink-800 to-violet-900 rounded-xl";

  return (
    <div className="bg-white text-gray-800 font-semibold h-[80px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800 ml-4">Patryk.dev</h1>
      <ul className="hidden md:flex">
        <li className={cssClassSm}>
          <a href="#skills">Skills</a>
        </li>
        <li className={cssClassSm}>
          <a href="#projects">Projects</a>
        </li>
        <li className={cssClassSm}>
          <a href="#about">About</a>
        </li>
        <li className={cssClassSm}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-4">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`nav-menu ${
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl text-gray-200 r m-4">Patryk.dev</h1>
        <ul className="p-2 text-xl sm:text-2xl text-gray-200">
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#skills">Skills</a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#projects">Projects</a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#about">About</a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
