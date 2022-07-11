import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Order from "./Order";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { data } from "autoprefixer";

function OrderPage() {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://enigmatic-coast-33836.herokuapp.com/my-orders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user]);

  return (
    <div className="mx-20 min-w-[700px]">
      <h1 className="font-[500] text-3xl pt-4">Your Orders</h1>
      <div className="p-10 my-5 mx-0 border bg-white">
        {orders.map((item) => (
          <Order key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
