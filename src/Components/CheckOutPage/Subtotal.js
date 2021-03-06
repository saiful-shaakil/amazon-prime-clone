import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Subtotal() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-[300px] h-[110px] p-5 bg-[#f3f3f3] border-[2px] border-[#dddddd] rounded-[3px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({amount} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-1" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={() => {
          if (amount > 0) {
            navigate("/payment-checkout");
          } else {
            toast.error("Please, add something to your cart.");
            navigate("/");
          }
        }}
        className="bg-[#f0c14b] rounded-[2px] w-full h-7 border-[1px] my-2 border-[#a88734] text-[#111]"
        type="button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
