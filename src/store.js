import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/ReduxToolkit/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
