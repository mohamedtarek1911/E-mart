import { createSlice } from "@reduxjs/toolkit";
const items =
  localStorage.getItem("CartItems") !== null
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [];
export let cartSlice = createSlice({
  initialState: items,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const exist = state.find((product) => product.id === action.payload.id);
      if (exist) {
        exist.qty += 1;
      } else {
        const productClone = { ...action.payload, qty: 1 };
        state.push(productClone);
      }
      console.log(action.payload);
      localStorage.setItem("CartItems", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const exist = state.find((product) => product.id === action.payload.id);
      // exist.qty--;
      if (exist.qty === 1) {
        console.log(state.items);
        return state.filter((product) => product.id !== action.payload.id);
      }
      exist.qty--;
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    ClearCart: (state, action) => {
      localStorage.clear();
      return [];
    },
  },
});

export let CartSlice = cartSlice.reducer;
export let { removeItem, addToCart, removeFromCart, ClearCart } =
  cartSlice.actions;
