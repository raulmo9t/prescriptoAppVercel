import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 my-10">
        <img src={assets.about_image} className="w-full max-w-[350px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            dolore tempore tempora in adipisci. Voluptate itaque facilis fugit
            officia, maxime aliquid? Quam cum incidunt libero placeat beatae
            recusandae, rerum exercitationem?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            deserunt, possimus obcaecati corrupti vel in vitae voluptates
            voluptatibus consequatur ab doloribus ratione praesentium minima
            earum repellendus officiis placeat, fugit quisquam?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            iusto vel id, laboriosam sapiente soluta at deleniti architecto
            aliquam quo sit dolore dolorum praesentium corrupti maiores! Impedit
            et iste quam.
          </p>
        </div>
      </div>

      <div className="text-2xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-x-0 duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-x-0 duration-300 text-gray-600 cursor-pointer">
          <b>Convinience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-x-0 duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
