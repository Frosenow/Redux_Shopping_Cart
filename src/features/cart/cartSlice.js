import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
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
      store.cartItems = cartItems;
    },
    increaseAmount: (store, action) => {
      const itemId = action.payload;
      const cartItem = store.cartItems.find((item) => item.id === itemId);
      cartItem.amount += 1;
    },
    decreaseAmount: (store, action) => {
      const itemId = action.payload;
      const cartItem = store.cartItems.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.amount -= 1;
      }
    },
    calculateTotal: (store) => {
      let amount = 0;
      let total = 0;
      store.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      store.total = total;
      store.amount = amount;
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;
