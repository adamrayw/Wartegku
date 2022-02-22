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
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
