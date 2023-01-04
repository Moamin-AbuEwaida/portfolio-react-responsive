import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>

      <ul className="md:flex hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Humburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-xl uppercase font-semibold">Home</li>
        <li className="py-6 text-xl uppercase font-semibold">About</li>
        <li className="py-6 text-xl uppercase font-semibold">Skills</li>
        <li className="py-6 text-xl uppercase font-semibold">Work</li>
        <li className="py-6 text-xl uppercase font-semibold">Contact</li>
      </ul>
      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li>
            <a href="/">
              Facebook <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              Instagram <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              Github <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              Email <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
