import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
  name: "slice1",
  initialState: { value: [{ firstName: "Manoj", age: 23, gender: "Male" }] },
  reducers: {
    changeState: (state, actions) => {
      state.value.push(actions.payload);
    },
  },
});
export const { changeState } = slice1.actions;
export const slice1Red = slice1.reducer;
