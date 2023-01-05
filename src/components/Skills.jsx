import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import SASS from "../assets/sass.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import REACT from "../assets/react.png";
import GSAP from "../assets/gsap.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen skill text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Skills
          </p>
          <p className="py-4">
            Your design portfolio content should showcase your best work.
            Include an interactive prototype, a micro animation, a website in
            motion, not just static designs.
          </p>
        </div>
        <div className="w-full text-center py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GSAP} alt="" />
            <p className="my-4">GSAP</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SASS} alt="" />
            <p className="my-4">SASS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
