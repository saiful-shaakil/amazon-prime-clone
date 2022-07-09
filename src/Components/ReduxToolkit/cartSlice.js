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
      const item = action.payload;
      state.cartItems = [...state.cartItems, item];
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
