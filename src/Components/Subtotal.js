import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="flex flex-col justify-between w-[300px] h-[110px] p-5 bg-[#f3f3f3] border-[2px] border-[#dddddd] rounded-[3px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-1" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="bg-[#f0c14b] rounded-[2px] w-full h-7 border-[1px] my-2 border-[#a88734] text-[#111]"
        type="button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
