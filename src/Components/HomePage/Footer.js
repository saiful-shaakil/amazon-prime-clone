import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faFlagUsa } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="flex flex-col text-white">
      <button onClick={scrollToTop} className="bg-[#37475a] text-center py-3">
        Back to top
      </button>
      <div className="bg-[#232f3e] p-5 flex flex-col">
        <div className="flex ">
          <div className="flex-[0.3] text-center">
            <strong className="text-xl">Get to Know Us</strong>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Science</p>
          </div>
          <div className="flex-[0.4] text-center">
            <strong className="text-xl">Make Money with Us</strong>
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
          </div>
          <div className="flex-[0.3] text-center">
            <strong className="text-xl">Amazon Payment Products</strong>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>AMazon Currency Converter</p>
          </div>
        </div>
        <hr className="w-full my-3 border-[#a19898] " />
        <div className="flex items-center justify-center">
          <img
            className="w-[80px] object-contain my-0 mx-5 mt-[18px]"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <div className="border border-[#a19898]  py-1 px-2 rounded-md">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" /> English
          </div>
          <div className="border border-[#a19898]  py-1 px-2 rounded-md mx-2">
            <strong className="mr-2">$</strong> USD- U.S. Dollar
          </div>
          <div className="border border-[#a19898] py-1 px-2 rounded-md">
            <FontAwesomeIcon icon={faFlagUsa} className="mr-2" /> United States
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
