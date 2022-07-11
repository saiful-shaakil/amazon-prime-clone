import React, { forwardRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeItem } from "../ReduxToolkit/cartSlice";
import { toast } from "react-toastify";

export const CheckOutItem = forwardRef(({ item, hideRemove }, ref) => {
  const { id, image, title, price, rating, amount } = item;
  const dispatch = useDispatch();
  return (
    <div className="flex my-5">
      <img src={image} alt="cart item" className="object-contain w-44 h-44" />
      <div className="pl-5">
        <p className="text-[17px] font-extrabold">{title}</p>
        <p className="">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>
          <strong>{amount}</strong> pcs
        </p>
        <p className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        {!hideRemove && (
          <button
            onClick={() => {
              dispatch(removeItem(id));
              toast.success(`${title} is removed from your cart.`);
            }}
            className="bg-[#f0c14b] border-[1px] border-[#a88734] text-[#111] mt-2 px-2"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
});

export default CheckOutItem;
