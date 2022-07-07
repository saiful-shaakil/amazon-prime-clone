import React from "react";

function Product() {
  return (
    <div className="flex flex-col items-center justify-end m-[10px] p-5 w-[100%] max-h-[400px] min-w-[100px] bg-white z-[1]">
      <div className="h-[100px] mb-[15px] mr-auto">
        <p>Where the Crawdads Sing</p>
        <p className="mt-1">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="flex">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        className="max-h-[200px] w-[100%] object-contain mb-[15px]"
        src="https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <button className="bg-[#f0c14b] border-[1px] mt-[10px] border-[#a88734] py-1 px-3 text-[#111]">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
