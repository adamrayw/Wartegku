import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.value.push(action.payload);
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
