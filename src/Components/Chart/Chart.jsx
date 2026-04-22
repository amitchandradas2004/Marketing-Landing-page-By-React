import React from "react";
import ChartImage from "../../assets/Chart.png";
import ChartFrame from "../../assets/chartFrame.png";
const Chart = () => {
  return (
    <div className="bg-black pt-8">
      <div className="text-center space-y-5 text-white">
        <h2 className="text-6xl font-bold">Eye Popping Results</h2>
        <p className="text-[#84A5AA] text-xl">
          We'll help you acquire more customers--for <br /> less--and maximize
          marketing performance so you can scale profitably.
        </p>
      </div>
      <div className="flex justify-center gap-10 items-center py-5 select-none">
        <span>
          <img src={ChartImage} className="w-100" />
        </span>
        <span className="space-y-4">
          <img src={ChartFrame} className="w-40" />
          <img src={ChartFrame} className="w-40" />
        </span>
      </div>
    </div>
  );
};

export default Chart;
