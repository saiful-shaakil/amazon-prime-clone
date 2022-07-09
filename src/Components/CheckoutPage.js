import React from "react";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { store } from "../store";

function CheckoutPage() {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <div className="flex bg-white h-max p-5">
      <div className="left">
        <img
          className="mb-[10px]"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="mr-[10px] - p-[10px] border-b-[2px] border-b-[lightgray] text-2xl font-bold">
            Your Shopping Cart
          </h2>
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
