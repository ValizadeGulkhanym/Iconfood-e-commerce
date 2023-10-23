import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk(
  "review/fetchReview",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `${
          import.meta.env.VITE_APP_STRAPI_BASE_URL
        }/api/reviews?filters[productID][$eq]=${id}`
      );
      return result.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
