import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
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
  },
});

export const { addToCart, removeFromCart, addAmount, decreaseAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
