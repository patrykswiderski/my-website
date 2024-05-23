import React from "react";

function Projects() {
  const cssProjectContainer =
    "transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-auto bg-cover relative";

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="projects">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold text-gray-800">Projects</p>
        <p className="text-gray-600">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className={cssProjectContainer}>
          <img src="/port1.png" layout="fill" objestFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://online-grocery-store-app.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={cssProjectContainer}>
          <img src="/port2.png" layout="fill" objestFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://patrykswiderski.github.io/perfume-shop-project/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
