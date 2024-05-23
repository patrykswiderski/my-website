"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

function Hero() {
  return (
    <div className="mt-[80px]">
      <div className="grid grid-cols-1 max-w-[1200px] mx-auto bg-white">
        <div className="flex flex-col justify-center items-center mx-auto my-auto w-auto h-auto">
          <img src="/best2.jpg" alt="hero image" className="lg:rounded-2xl" />
        </div>

        <div className="cols-span-2 px-5 my-auto">
          <h1 className="text-gray-800 text text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="primary-color">I'm a</span> <br />
            <TypeAnimation
              sequence={[
                "Web dev",
                2000,
                "Front-End Dev",
                2000,
                "React Dev",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>

          <p className="text-gray-600 sm:text-lg my-6 lg:text-xl">
            My name is Patryk Świderski. A passionate Front-end React Developer
            based in Warsaw, Poland.
          </p>

          <div className="mx-auto grid grid-cols-2 place-items-center md:flex md:justify-start md:items-center gap-4 md:gap-4 my-8">
            <a
              href="https://www.linkedin.com/in/patryk-świderski"
              className="transform transition-transform hover:scale-110"
            >
              <IconBrandLinkedin color="black" size={62} />
            </a>

            <a
              href="https://github.com/patrykswiderski"
              className="transform transition-transform hover:scale-110 "
            >
              <IconBrandGithub color="black" size={54} />
            </a>

            <a
              href="mailto:patryk.swiderski.85@gmail.com"
              className="col-span-2 w-full lg:w-auto font-bold lg:font-semibold text-gray-700 text-center px-6 py-3 rounded-xl lg:mr-4 border border-x-gray-400 hover:bg-gradient-to-br from-gray-500 to-gray-900 hover:text-white hover:border-none transform transition-transform hover:scale-105 shadow-md shadow-gray-500"
            >
              patryk.swiderski.85@gmail.com
            </a>

            <a
              href="/CV_Patryk_Swiderski_EN.pdf"
              className="col-span-2 w-full lg:w-auto text-center px-6 py-3 rounded-xl lg:mr-4 bg-gradient-to-br  from-pink-700 to-violet-900 text-white transform transition-transform hover:scale-105 hover:text-gray-800 hover:font-bold shadow-md shadow-gray-500"
            >
              Download CV
            </a>

            {/* <a href='#contact' className='col-span-2 w-full lg:w-auto text-center px-6 py-3 rounded-xl lg:mr-4 border border-x-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hoover:border-none transform transition-transform hover:scale-105'>
                        Contact
                    </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
