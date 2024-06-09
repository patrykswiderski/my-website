"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseNav = (event) => {
    if (event.key === "Escape" || (nav && !event.target.closest(".nav-menu"))) {
      setNav(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleCloseNav);
    document.addEventListener("click", handleCloseNav);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleCloseNav);
      document.removeEventListener("click", handleCloseNav);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    const navbarHeight = +55;

    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });

    setNav(false);
  };

  const cssClassSm = "p-5 transform transition-transform hover:scale-110";
  const cssClassLg =
    "p-2 transform transition-transform hover:bg-primary-color hover:bg-gradient-to-br from-pink-800 to-violet-900 rounded-xl";

  return (
    <div
      className={`fixed top-0 left-0 right-0 font-semibold max-w-[1200px] mx-auto flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "h-[50px] bg-gray-800 text-gray-100 rounded-b-md shadow-md shadow-gray-500 z-40"
          : "h-[80px] bg-white text-gray-800 "
      }`}
    >
      <h1
        className={`ml-4 ${
          scrolled
            ? " text-gray-100 font-normal text-2xl"
            : " text-gray-800 font-bold text-3xl"
        }`}
      >
        Patryk.dev
      </h1>
      <ul className="hidden md:flex">
        <li
          className={cssClassSm}
          onClick={(e) => handleLinkClick(e, "#skills")}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={cssClassSm}
          onClick={(e) => handleLinkClick(e, "#projects")}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={cssClassSm}
          onClick={(e) => handleLinkClick(e, "#about")}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={cssClassSm}
          onClick={(e) => handleLinkClick(e, "#contact")}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-4">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`nav-menu ${
          nav
            ? "z-40 fixed h-full left-0 top-0 w-[60%] bg-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl text-gray-200 r m-4">Patryk.dev</h1>
        <ul className="p-2 text-xl sm:text-2xl text-gray-200">
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
              Skills
            </a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "#projects")}
            >
              Projects
            </a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              About
            </a>
          </li>
          <li className={cssClassLg} onClick={handleNav}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
