import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProducts = createAsyncThunk("productsSlice/getData", async () => {
  let { data } = await axios.get(`https://fakestoreapi.com/products`);
  return data;
});

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export let { add } = productsSlice.actions;
export let ProductsSlice = productsSlice.reducer;
