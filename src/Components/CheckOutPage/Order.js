import React from "react";
import { useDispatch } from "react-redux";

function Order({ item }) {
  const { id, image, title, price, rating, time, paymentID } = item;
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
        <p className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <p>
          <strong>TranxID:</strong> {paymentID}
        </p>
        <p>
          <strong>Ordered at:</strong> {time}
        </p>
      </div>
    </div>
  );
}

export default Order;
