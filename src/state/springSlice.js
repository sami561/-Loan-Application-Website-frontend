import { createSlice } from "@reduxjs/toolkit";
export const springSlice = createSlice({
  name: "spring",
  initialState: {
    governorate: [],
  },
  reducers: {
    setGovernorate: (state, action) => {
      state.governorate = action.payload;
    },
  },
});

export const { setGovernorate } = springSlice.actions;
export default springSlice.reducer;
