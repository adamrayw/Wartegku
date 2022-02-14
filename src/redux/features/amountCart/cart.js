import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  cartTotalQuantitiy: 0,
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.value[itemIndex].qty += 1;
      } else {
        const tempitem = { ...action.payload, qty: 1 };
        state.value.push(tempitem);
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.value[itemIndex]) {
          state.value.splice(itemIndex, 1);
        }
      }
    },
    addAmount: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].qty += 1;
      }
    },
    decreaseAmount: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.value[itemIndex].qty === 1) {
          state.value[itemIndex].qty = 1;
        } else {
          state.value[itemIndex].qty -= 1;
        }
      }
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.value.reduce(
        (cartTotal, cartItem) => {
          const { harga, qty } = cartItem;
          const itemTotal = harga * qty;

          cartTotal.total += itemTotal;
          cartTotal.qty += qty;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantitiy = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addAmount,
  decreaseAmount,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
