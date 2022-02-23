import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.push({
        orderId: Math.floor(1000 + Math.random() * 1000),
        value: action.payload,
      });
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
