import { createSlice } from "@reduxjs/toolkit";

interface OptionState {
  value: boolean;
}
const initialState: OptionState = {
  value: false,
};

const newsOptionSlice = createSlice({
  name: "newsOption",
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeView } = newsOptionSlice.actions;
export default newsOptionSlice.reducer;
