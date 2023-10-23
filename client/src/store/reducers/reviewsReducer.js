import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../actions/reviews";

const initialState = {
  data: [],
  error: null,
  loading: false,
};
export const reviewSlice = createSlice({
  name: "reviews",
  initialState,

  reducers: {
    addReview: (state, { payload }) => {
      state.data.push(payload);
    },
    deleteReview: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
    },
  },

  extraReducers: {
    [getReviews.pending]: (state) => {
      state.loading = true;
    },
    [getReviews.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getReviews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
  },
});
export const { addReview } = reviewSlice.actions;
export const { deleteReview } = reviewSlice.actions;
export default reviewSlice.reducer;
