import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="flex w-[80vw] justify-center gap-32  items-center   ">
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center justify-center"> <div className="relative">
          <img src={logo} alt="logo" className="w-16 h-16 " />
        </div>
        <div className=" font-bold text-3xl text-sky-500">IEEE NSUT</div></div>
      </div>
        
        <div className="flex flex-row gap-3 justify-center items-center text-cyan-400 font-bold text-2xl">
          Algoverse LeaderBoard
        </div>
    </div>
  );
};

export default Navbar;
