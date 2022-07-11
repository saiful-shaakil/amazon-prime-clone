import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CheckOutItem from "./CheckOutItem";
import { Link } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from "./StripePaymentForm";

const promise = loadStripe(
  "pk_test_51L3GjVAjo3Oz9HwztP0K4uT8wQgUycRVbtITED5jXTYZC9fd4ry3uaCfssebrXqM9JRABtehNLQqXmSa1yyjbQ8Q00RkyHdNNa"
);

function PaymentCheckOut() {
  const [user] = useAuthState(auth);
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="bg-white min-w-[700px]">
      <div className="container">
        <h1 className="text-center p-2 font-[400] bg-[#ece3e3] border-b-[2px] border-b-[lightgray]">
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>
        {/* delivery address */}
        <div className="flex p-5 my-0 mx-5 border-b-[1px] border-b-[lightgray]">
          <div className="flex-[0.2]">
            <h1 className="text-xl font-medium">Delivery Address</h1>
          </div>
          <div className="flex-[0.8] ml-9">
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* review items */}
        <div className="flex p-5 my-0 mx-5 border-b-[1px] border-b-[lightgray]">
          <div className="flex-[0.2]">
            <h1 className="text-xl font-medium">Review items and delivery</h1>
          </div>
          <div className="flex-[0.8]">
            {cartItems.map((item) => (
              <CheckOutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="flex p-5 my-0 mx-5 border-b-[1px] border-b-[lightgray]">
          <div className="flex-[0.2]">
            <h1 className="text-xl font-medium">Payment Method</h1>
          </div>
          <div className="flex-[0.8] ml-9">
            {/* stripe */}
            <Elements stripe={promise}>
              <StripePaymentForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCheckOut;
