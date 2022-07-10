import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CheckOutItem from "./CheckOutItem";

function PaymentCheckOut() {
  const [user] = useAuthState(auth);
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="payment">
      <div className="container">
        {/* delivery address */}
        <div className="section">
          <div className="title">
            <h1 className="text-xl font-medium">Delivery Address</h1>
          </div>
          <div className="address">
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* review items */}
        <div className="section">
          <div className="title">
            <h1 className="text-xl font-medium">Review items and delivery</h1>
          </div>
          <div className="items">
            {cartItems.map((item) => (
              <CheckOutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="section">
          <div className="title">
            <h1 className="text-xl font-medium">Payment Method</h1>
          </div>
          <div className="details">{/* stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCheckOut;
