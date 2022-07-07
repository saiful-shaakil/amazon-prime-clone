import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="flex justify-center mx-auto max-w-[1500px]">
      <div className="home-container">
        <img
          className="w-[100%] z-[1] mb-[-150px] gradient-mask-b-0"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Background"
        />
        <div className="flex z-[[1] mx-[5px]">
          <Product />
          <Product />
        </div>
        <div className="flex z-[[1] mx-[5px]">
          <Product />
        </div>
        <div className="flex z-[[1] mx-[5px]">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
