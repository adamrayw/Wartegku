import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/amountCart/cart";

export const store = configureStore({
  reducer: {
    cart: cart,
  },
});
