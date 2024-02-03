import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
    },
    removeItem: (store, action) => {
      const itemId = action.payload;
      const cartItems = store.cartItems.filter((item) => item.id !== itemId);
      store.amount = cartItems.length;
      store.cartItems = cartItems;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem } = cartSlice.actions;
