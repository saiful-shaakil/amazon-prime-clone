import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
  return (
    <div className="flex justify-center mx-auto max-w-[1500px] min-w-[700px]">
      <div className="home-container">
        <img
          className="w-[100%] z-[1] mb-[-100px] lg:mb-[-250px] md:mb-[-150px] gradient-mask-b-0"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Background"
        />
        <div className="flex z-[[1] mx-[5px]">
          <Product
            id="xyzAbc781"
            key={"xyzAbc781"}
            title="Where the Crawdads Sing"
            price="10.11"
            img="https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="xyzAbc782"
            key={"xyzAbc782"}
            title="It's Not Summer Without You"
            price="9.99"
            img="https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="xyzAbc783"
            key={"xyzAbc783"}
            title="We'll Always Have Summer"
            price="9.99"
            img="https://images-na.ssl-images-amazon.com/images/I/41vlc4ugVLL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="flex z-[[1] mx-[5px]">
          <Product
            id="xyzAbc784"
            key={"xyzAbc784"}
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker,  Sauté, Yogurt Maker, Warmer & Sterilizer, Includes Free App with over 1900 Recipes"
            price="79.99"
            img="https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            id="xyzAbc785"
            key={"xyzAbc785"}
            title="Instant Pot Vortex 5.7QT Large Air Fryer Oven Combo, Customizable Smart Cooking Programs,  Nonstick and Dishwasher-Safe Basket, Includes Free App with over 1900 Recipes"
            price="84.99"
            img="https://m.media-amazon.com/images/I/61dtu0t3g1L._AC_SY450_.jpg"
            rating={4}
          />
        </div>
        <div className="flex z-[[1] mx-[5px]">
          <Product
            id="xyzAbc786"
            key={"xyzAbc786"}
            title="Samsung Chromebook Plus V2, 2-in-1, 4GB RAM, 32GB eMMC, 13MP Camera, Chrome OS, 12.2 inch, 16:10 Aspect Ratio, Light Titan (XE520QAB-K01US)
            "
            center
            price="384.99"
            img="https://m.media-amazon.com/images/I/81mX-4s+guL._AC_SX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
