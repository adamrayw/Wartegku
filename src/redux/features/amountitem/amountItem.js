import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const amountItem = createSlice({
  name: "amountItem",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      if (state.value === 1) {
        state.value = 1;
      } else {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

export const { add, remove, reset } = amountItem.actions;

export default amountItem.reducer;
