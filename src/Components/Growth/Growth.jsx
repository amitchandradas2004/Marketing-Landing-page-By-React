import React from "react";

const Growth = () => {
  return (
    <div className="bg-black text-white py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-5xl md:text-6xl font-bold">
            Unlock profitable growth <br /> with data intelligence
          </h3>
          <p className="text-[#84A5AA] text-xl font-semibold">
            Make better business decisions with industry-leading predictive
            intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 px-5">
          <div className="rounded-xl overflow-hidden h-40 transition hover:-translate-y-0.5">
            <h2 className="bg-[#FFE090] text-black font-semibold text-xl p-2">
              More data, sharper decisions
            </h2>
            <p className="text-xs bg-white text-black py-3 px-2 font-medium h-full">
              Tap into our ever-growing universe of first- party data from 60M+
              eCom shoppers across $10B+ in online sales to enhance ad targeting
              signals.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-40  transition hover:-translate-y-0.5">
            <h2 className="bg-[#CEF298] text-black font-semibold text-xl p-2">
              Expand your reach
            </h2>
            <p className="text-xs bg-white text-black py-3 px-2 font-medium h-full">
              Tap into our ever-growing universe of first- party data from 60M+
              eCom shoppers across $10B+ in online sales to enhance ad targeting
              signals.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-40  transition hover:-translate-y-0.5">
            <h2 className="bg-[#AADBE1] text-black font-semibold text-xl p-2">
              Scale ads with confidence
            </h2>
            <p className="text-xs bg-white text-black py-3 px-2 font-medium  h-full">
              Tap into our ever-growing universe of first- party data from 60M+
              eCom shoppers across $10B+ in online sales to enhance ad targeting
              signals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
