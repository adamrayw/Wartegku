import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/amountCart/cart";
import order from "./features/myOrder/order";

export const store = configureStore({
  reducer: {
    cart: cart,
    order: order,
  },
});
