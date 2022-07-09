import Home from "./Components/HomePage/Home";
import Header from "./Components/Shared/Header";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getTotal } from "./Components/ReduxToolkit/cartSlice";
import { useEffect } from "react";
import CheckoutPage from "./Components/CheckOutPage/CheckoutPage";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="bg-[#eaeded]">
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)
