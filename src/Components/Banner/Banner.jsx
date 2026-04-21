import React from "react";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-linear-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE] py-10 h-[120%]">
      <div className="text-center space-y-5 container mx-auto ">
        <span className="flex items-center text-xl gap-2 font-medium justify-center py-4">
          <span>
            {" "}
            <FaStar />
          </span>
          4.5 (124 reviews)
        </span>
        <div className="space-y-4">
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            Data Is the Key To <br /> Profitable Growth
          </h3>
          <p className="text-xl font-medium">
            Proxima's predictive intelligence lowers acquisition costs and
            increases customer LTV so you can scale your business profitably.
          </p>
        </div>
        <div className="space-x-4">
          <button className="btn rounded-xl">Start free trial</button>
          <button className="btn btn-neutral rounded-xl">Get a demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
