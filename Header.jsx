import React from "react";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <div className="sticky">
      <div className="mx-20 px-5 py-7 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-[45px] mr-[5px]"
            src="/images/Pasha Sigorta Logo eng long colored _20220315171946.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <FaPhone className="text-[20px] text-[#0094C9]" />
          <span className="text-[#0094C9]">*7000</span>
          <button className="py-2 transition px-6 border-2 rounded-md border-[#0094C9] text-[#0094C9] text-[14px] roboto hover:text-white hover:border-white hover:bg-[#0094C9] duration-300">
            Online payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;