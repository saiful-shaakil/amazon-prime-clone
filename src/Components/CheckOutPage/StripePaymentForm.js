import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import CurrencyFormat from "react-currency-format";

function StripePaymentForm() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeed, setSucceed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = () => {
    //
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
          className="border px-2 rounded-sm"
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
