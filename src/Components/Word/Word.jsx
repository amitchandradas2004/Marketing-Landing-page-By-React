import React from "react";
import SmallMan from "../../assets/smallman.png";
import Table from "../../assets/table.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Word = () => {
  return (
    <div className="bg-linear-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE] py-10">
      <div className="container  mx-auto">
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
              className="w-full h-full object-cover rounded-2xl md:rounded-none"
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
    </div>
  );
};

export default Word;
