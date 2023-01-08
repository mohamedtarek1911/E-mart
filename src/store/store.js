import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import { ProductsSlice } from "./ProductsSlice";

export let store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: CartSlice,
  },
});
