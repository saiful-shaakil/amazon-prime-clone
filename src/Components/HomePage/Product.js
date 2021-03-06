import React from "react";
import { addItem } from "../ReduxToolkit/cartSlice";
import { useDispatch } from "react-redux/es/exports";
import { toast } from "react-toastify";

function Product({ id, center, title, price, img, rating }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-end m-[10px] p-5 w-[100%] max-h-[600px] min-w-[100px] bg-white z-[1]">
      <div className={`mb-auto ${center ? "text-center" : "mr-auto"}`}>
        <p>{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          <span className={`flex my-2 mr-auto ${center && "mx-auto"}`}>
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
      <button
        onClick={() => {
          dispatch(
            addItem({
              id: id,
              title: title,
              price: price,
              rating: rating,
              image: img,
              amount: 1,
              paymentID: "",
              email: "",
              time: "",
            })
          );
          toast.success(`${title} is added to your cart.`);
        }}
        className="bg-[#f0c14b] border-[1px] mt-[10px] border-[#a88734] py-1 px-3 text-[#111]"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
