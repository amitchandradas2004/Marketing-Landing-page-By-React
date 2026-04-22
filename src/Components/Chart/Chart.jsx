import React from "react";
import ChartImage from "../../assets/Chart.png";
import ChartFrame from "../../assets/chartFrame.png";
import Man from "../../assets/Person.png";
const Chart = () => {
  return (
    <div className="bg-black pt-8">
      <div className="container mx-auto">
        <div className="text-center space-y-5 text-white">
          <h2 className="text-6xl font-bold">Eye Popping Results</h2>
          <p className="text-[#84A5AA] text-xl">
            We'll help you acquire more customers--for <br /> less--and maximize
            marketing performance so you can scale profitably.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center py-5 select-none">
          <span>
            <img src={ChartImage} className="w-100" />
          </span>
          <span className="flex md:flex-col gap-5 space-y-4">
            <img src={ChartFrame} className="w-40" />
            <img src={ChartFrame} className="w-40" />
          </span>
        </div>
        <div className="border border-gray-700  bg-linear-to-b from-[#1ce8ab1e] to-[#2726265b] py-5 mx-2 px-10 rounded-2xl ">
          <span className="text-white space-y-3">
            <img src={Man} className="w-30" />
            <h3 className="text-2xl font-bold">Nick Chadha</h3>
            <p className="text-[#84A5AA]">Co-Founder @ Venus et Fleur</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
