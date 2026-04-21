import React from "react";
import Icon from "../../assets/icon1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

const Logo = () => {
  return (
    <div>
      <div className="flex justify-center py-2 items-center text-2xl font-bold gap-2">
        <span>
          <img src={Icon} className="bg-black w-8 rounded-full p-1" />
        </span>
        <span>Halal_Lab</span>
      </div>
      <div className="bg-black flex flex-col md:flex-row justify-center items-center space-x-4 py-5">
        <img src={logo2} className="w-20" />
        <img src={logo3} className="w-25 py-2" />
        <img src={logo4} className="w-20" />
        <img src={logo5} className="w-25 py-3" />
        <img src={logo6} className="w-20" />
      </div>
    </div>
  );
};

export default Logo;
