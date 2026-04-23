import React from "react";

const Audience = () => {
  return (
    <div className="bg-black text-white">
      <div className="text-center space-y-3 pt-10">
        <h2 className="text-5xl md:text-6xl font-bold">
          AI Audiences give you an edge in advertising
        </h2>
        <p className="text-[#84A5AA] font-medium">
          Maximize your ad performance with predictive audiences built from
          millions of commerce insights.
        </p>
      </div>
      <div className="space-y-3 pl-10 py-5">
        <h3 className="text-3xl font-bold">
          Scale ad spend without <br /> efficiency loss
        </h3>
        <p className="text-[#84A5AA] text-xs font-medium">
          Reach more customers who are ready to buy. <br /> Target audiences by
          tapping into a rich <br /> first-party data Outperform and out-scale
          campaigns <br /> that rely on in-platform targeting Improve CAC,{" "}
          <br /> ROAS, and AOV with powerful algorithms that constantly learn
        </p>
      </div>
    </div>
  );
};

export default Audience;
