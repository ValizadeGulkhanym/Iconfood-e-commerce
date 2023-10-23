import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../actions/basket";
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  basketTotalQuantity: localStorage.getItem("basketTotalQuantity")
  ? JSON.parse(localStorage.getItem("basketTotalQuantity"))
  : 0,
  basketTotalAmount: localStorage.getItem("basketTotalAmount")
  ? JSON.parse(localStorage.getItem("basketTotalAmount"))
  : 0,
};
const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      const isExist = state.items.some((p) => p.id === payload.id);
      if (!isExist) {
        state.items.push({ ...payload, quantity: 1 });
        toast.success(`${payload.attributes.title} to cart`, {
          position: "bottom-left",
        });
      } else {
        const newProducts = state.items.map((p) =>
          p.id === payload.id ? { ...p, quantity: p.quantity + 1 } : p
        );

        state.items = newProducts;
        toast.info(`increased ${payload.attributes.title} quantity`, {
          position: "bottom-left",
        });
      }
      state.basketTotalQuantity = state.items.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      state.basketTotalAmount = state.items.reduce(
        (acc, currentValue) =>
          acc + currentValue.attributes.price * currentValue.quantity,
        0
      );
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("basketTotalQuantity", JSON.stringify(state.basketTotalQuantity));
      localStorage.setItem("basketTotalAmount", JSON.stringify(state.basketTotalAmount));
    },
    deleteProduct: (state, { payload }) => {
      const nextItems = state.items.filter((item) => item.id !== payload.id);
      state.items = nextItems;

      state.basketTotalQuantity = state.items.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      state.basketTotalAmount = state.items.reduce(
        (acc, currentValue) =>
          acc + currentValue.attributes.price * currentValue.quantity,
        0
      );

      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("basketTotalQuantity", JSON.stringify(state.basketTotalQuantity));
      localStorage.setItem("basketTotalAmount", JSON.stringify(state.basketTotalAmount));
      toast.error(`${payload.attributes.title} removed from cart`, {
        position: "buttom-left",
      });
    },
    decreaseCart(state, { payload }) {
      const itemIndex = state.items.findIndex((item) => item.id === payload.id);
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        
        state.basketTotalQuantity = state.items.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
  
        state.basketTotalAmount = state.items.reduce(
          (acc, currentValue) =>
            acc + currentValue.attributes.price * currentValue.quantity,
          0
        );
        localStorage.setItem("basketTotalQuantity", JSON.stringify(state.basketTotalQuantity));
        localStorage.setItem("basketTotalAmount", JSON.stringify(state.basketTotalAmount));
        toast.info(`Decreased ${payload.attributes.title} cart quantity`, {
          position: "buttom-left",
        });
      } else if (state.items[itemIndex].quantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.id !== payload.id
        );
        state.items = nextCartItems;

        toast.error(`${payload.attributes.title} removed from cart`, {
          position: "buttom-left",
        });
      }
    },
    deleteAll: (state) => {
      state.items = [];
      state.basketTotalAmount = 0;
      state.basketTotalQuantity = 0;
      localStorage.removeItem("items");
    },
  },
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export const {
  addToBasket,
  basketTotalQuantity,
  basketTotalAmount,
  deleteProduct,
  decreaseCart,
  deleteAll,
} = basketSlice.actions;
export default basketSlice.reducer;
