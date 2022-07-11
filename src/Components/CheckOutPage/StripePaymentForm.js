import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import CurrencyFormat from "react-currency-format";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../ReduxToolkit/cartSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

function StripePaymentForm() {
  const [user] = useAuthState(auth);
  const { cartItems, total } = useSelector((store) => store.cart);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeed, setSucceed] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //I'm doing this because if the total become 0 beacause of user's refresh then stripe will throw an error and my app will be crashed.lol thats why I'm trying to prevent this by doing this crazy stuff
  let totalPrice;
  if (total > 0) {
    totalPrice = total;
    totalPrice = totalPrice.toFixed(2);
  } else {
    totalPrice = 5;
  }
  //creating a new array because redux toolkit array is read only
  let newOrderArray = [];
  cartItems.forEach((item, index) => {
    newOrderArray[index] = { ...item };
  });
  //time
  const dateTime = new Date().toLocaleString();
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [cartItems, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        if (paymentIntent.status === "succeeded") {
          newOrderArray.map((item) => {
            item.paymentID = paymentIntent.id;
            item.email = user?.email;
            item.time = dateTime;
          });
          fetch("http://localhost:5000/post-orders", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newOrderArray),
          });
          setSucceed(true);
          setError(null);
          setProcessing(false);
          navigate("/my-orders");
          dispatch(emptyCart());
          toast.success("Payment successful.");
        }
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange} />
      <div>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Total: <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={total} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button
          type="submit"
          className={`border px-2 rounded-sm ${
            processing ? "bg-green-500" : "bg-green-100 text-black"
          }`}
          disabled={processing || disabled || succeed}
        >
          <span>{processing ? <p>Processing</p> : "Order Now"}</span>
        </button>
      </div>
      {/* Errors */}
      {error && <p>{error}</p>}
    </form>
  );
}

export default StripePaymentForm;
