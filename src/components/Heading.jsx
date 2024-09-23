import React from "react";

const Heading = () => {
  return (
    <div className="absolute inset-0 w-8 mx-auto flex items-center justify-center z-10 font-custom">
      <h1 className="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-yellow-400 to-red-500 animate-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
        ICEVET'24 <span className="text-white ">CONFERENCE</span>{" "}
        {/* <hr className="border-4 border-yellow-400 " /> */}
        <div className="flex ml-20 mt-2">
          <div className="p-1">
            <img src="./calender.png" />
          </div>
          <div className="text-white">
          <p className="text-2xl font-semibold text-yellow-400 ml-2"> 22-23 November 2023</p>
          </div>
        </div>
        {/* <p className="text-2xl font-semibold text-white"> 22-23 November 2023</p> */}
      </h1>
    </div>
  );
};

export default Heading;
