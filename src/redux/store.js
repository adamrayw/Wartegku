import { configureStore } from "@reduxjs/toolkit";
import amountItem from "./features/amountitem/amountItem";
import cart from "./features/amountCart/cart";

export const store = configureStore({
  reducer: {
    amountitem: amountItem,
    cart: cart,
  },
});
