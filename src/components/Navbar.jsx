import { useState } from "react";
import { Link } from "react-router-dom"; 
import { icon } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  return (
    <nav className="w-full flex py-6 justify-evenly items-center navbar ">
      <div className="flex space-x-4">
        <button className="w-[80px]  
        text-[0.9em]
        rounded-[10px] bg-secondary text-primary font-bold transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105 border-[1px] text-center">
          ورود
        </button>
        <button className="w-[80px] h-[45px] rounded-[10px] bg-primary text-white font-bold shadow-lg transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
          عضویت
        </button>
      </div>

      <div className="hidden sm:flex list-none flex-row pr-[10px] text-primary font-bold">
        {navLinks.map((link, index) => (
          <li key={index} className="mr-[30px]">
            <Link to={link.path}>{link.title}</Link> 
          </li>
        ))}
      </div>
      <img src={icon} className="sm:w-[150px] w-[100px]" alt="icon" />
    </nav>
  );
};

export default Navbar;
