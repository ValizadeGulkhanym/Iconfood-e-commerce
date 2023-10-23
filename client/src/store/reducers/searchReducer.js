import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setSearch: (state, { payload }) => {
      state.keyword = payload;
    },
  },
});
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
