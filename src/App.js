import Home from "./Components/HomePage/Home";
import Header from "./Components/Shared/Header";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getTotal } from "./Components/ReduxToolkit/cartSlice";
import { useEffect } from "react";
import CheckoutPage from "./Components/CheckOutPage/CheckoutPage";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import NotFound from "./Components/Shared/NotFound";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentCheckOut from "./Components/CheckOutPage/PaymentCheckOut";
import OrderPage from "./Components/CheckOutPage/OrderPage";
import RequireAuth from "./Components/User/RequireAuth";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="bg-[#eaeded] min-w-[700px]">
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/payment-checkout"
          element={
            <RequireAuth>
              <PaymentCheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my-orders"
          element={
            <RequireAuth>
              <OrderPage />
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
