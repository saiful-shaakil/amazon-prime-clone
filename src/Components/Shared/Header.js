import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Header() {
  return (
    <header className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-50">
      {/* Amazon Logo */}
      <img
        className="w-[100px] object-contain my-0 mx-5 mt-[18px]"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      {/* Header Search Div */}
      <div className="flex flex-[1] items-center rounded-[24px]">
        <input
          type="text"
          className="h-[12px] p-[15.6px] border-none w-[100%]"
        />
        {/* Search Icon */}
        <FontAwesomeIcon
          className="p-[5px] cursor-pointer h-[22px] bg-[#cd9042]"
          icon={faMagnifyingGlass}
        />
      </div>
      {/* Header Right Side Options */}
      <div className="flex justify-evenly">
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">Hello Guest</span>
          <span className="text-[13px] font-extrabold">Sign In</span>
        </div>
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">Returns</span>
          <span className="text-[13px] font-extrabold">& Order</span>
        </div>
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">Your</span>
          <span className="text-[13px] font-extrabold">Prime</span>
        </div>
        <div className="flex flex-col justify-center items-center mx-[15px] text-white">
          <span className="text-[13px] font-extrabold mx-[10px]">0</span>
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;
