import { createSlice } from "@reduxjs/toolkit";

export const springSlice = createSlice({
  name: "spring",
  initialState: {
    governorate: [],
    banks: [],
  },
  reducers: {
    setGovernorate: (state, action) => {
      state.governorate = action.payload;
    },
    setBanks: (state, action) => {
      state.banks = action.payload;
    },
  },
});

export const { setGovernorate } = springSlice.actions;
export default springSlice.reducer;
