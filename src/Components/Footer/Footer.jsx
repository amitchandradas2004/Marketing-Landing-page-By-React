import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row   justify-around text-center md:text-start space-y-5">
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Product</h3>
          <p className="opacity-80">Home</p>
          <p className="opacity-80">AI Audiences</p>
          <div className="flex gap-2 items-center justify-center md:justify-start">
            {" "}
            <p className="opacity-80">Intelligence</p>
            <button className="bg-[#5091F350] px-2 rounded-full text-[#5091F3] font-medium border">
              BETA
            </button>
          </div>
        </div>
        <div className=" space-y-2">
          <h3 className="font-bold text-xl">Resources</h3>
          <p className="opacity-80">Case Studies</p>
          <p className="opacity-80">Help Center</p>
          <p className="opacity-80">Proxima Newsletter</p>
          <p className="opacity-80">Blog</p>
          <p className="opacity-80">Request a Demo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
