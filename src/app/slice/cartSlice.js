import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const duplicate = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log(state.products);
      if (duplicate) {
        duplicate.qty = action.payload.qty;
        duplicate.color = action.payload.color;
        duplicate.size = action.payload.size;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const selectAllCartProducts = (state) => state.cart.products;
export const { addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
