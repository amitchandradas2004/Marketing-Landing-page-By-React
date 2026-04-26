import React from "react";
import SmallMan from "../../assets/smallman.png";
import Table from "../../assets/table.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FreeImage from "../../assets/Free.png";
import { RiGeminiFill } from "react-icons/ri";
const Word = () => {
  return (
    <div className="bg-linear-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE] py-10 relative">
      <div className="container mx-auto">
        <h3 className="text-5xl md:text-6xl font-bold text-center py-5">
          Word on the street
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center md:h-80 lg:h-100 p-5 md:p-0 rounded-2xl bg-white overflow-hidden mx-5 md:mx-0 shadow-2xl">
          <div className="left w-full md:w-1/2 space-y-4 pl-5">
            <div>
              <p className="text-xs lg:text-xl font-medium">
                “The Proxima team has unparalleled consumer data that <br />
                has very exciting applications post iOS 14.5. Not only <br />
                is the data enriching to any brand’s targeting options, <br />
                the team is very experienced and diligent in funneling <br />{" "}
                paid media dollars to our various goals. Proxima has a <br />{" "}
                great product and their team is super easy to work with!”
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <img src={SmallMan} className="w-15 " />
              </span>
              <div>
                <h5 className="text-2xl font-bold">Charlie Denby</h5>
                <p className="font-medium">Director of Growth @ Canopy</p>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-1/2 pt-5 md:pt-0">
            <img
              src={Table}
              className="w-full h-full object-cover rounded-2xl md:rounded-none select-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center py-5">
        <span className="bg-black text-white rounded-full p-2">
          <FaChevronLeft />
        </span>
        <span className="bg-black text-white rounded-full p-2">
          <FaChevronRight />
        </span>
      </div>
      <div className="text-center py-5 space-y-3">
        <h3 className="text-6xl font-bold">
          Ready to get more out of your ad spend?
        </h3>
        <p className="font-medium">
          Reach new customers and unlock more efficient marketing spend with
          predictive intelligence.
        </p>
      </div>
      <div className="flex justify-center space-x-3 py-5">
        <button className="btn rounded-xl bg-transparent border border-gray-600">
          Start free trial
        </button>
        <button className="btn btn-neutral rounded-xl">Get a demo</button>
      </div>
      <div className="absolute bottom-40 md:bottom-40 lg:bottom-60 left-5 md:left-10">
        <img src={FreeImage} className="w-20 select-none" />
      </div>
      <div className="absolute bottom-40 md:bottom-45 lg:bottom-60 right-10">
        <span className="text-5xl">
          <RiGeminiFill />
        </span>
      </div>
    </div>
  );
};

export default Word;
