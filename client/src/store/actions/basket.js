import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "products/fetchProducts",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `${
          import.meta.env.VITE_APP_STRAPI_BASE_URL
        }/api/products?filter[productID][$eq]=${id}`
      );
      return result.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);