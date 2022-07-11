import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existItem === undefined) {
        state.cartItems = [...state.cartItems, newItem];
      } else {
        existItem.amount = existItem.amount + 1;
      }
    },
    getTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});
export const { addItem, getTotal, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
