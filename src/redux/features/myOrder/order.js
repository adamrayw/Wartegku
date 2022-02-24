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
    deleteOrder: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.orderId === action.payload
      );
      if (itemIndex >= 0) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
