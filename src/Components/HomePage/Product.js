import React from "react";

function Product({ id, center, title, price, img, rating }) {
  return (
    <div className="flex flex-col items-center justify-end m-[10px] p-5 w-[100%] max-h-[600px] min-w-[100px] bg-white z-[1]">
      <div className={`mb-auto ${center ? "text-center" : "mr-auto"}`}>
        <p>{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          <span className="flex mx-auto my-2">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </span>
        </div>
      </div>
      <img
        className="max-h-[200px] w-[100%] object-contain mb-[15px]"
        src={img}
        alt="Product"
      />
      <button className="bg-[#f0c14b] border-[1px] mt-[10px] border-[#a88734] py-1 px-3 text-[#111]">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
