import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchProducts = createAsyncThunk('getallproducts/fetchProducts', async () => {
  const { data } = await axios.get('/getallproducts');

  return data;
});

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducer: {},
  extraReducers: {
    // get products
    [fetchProducts.pending]: (state, action) => {
      state.products.items = [];
      state.products.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded';
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error';
    }
  }
});

export const productsReducer = productsSlice.reducer;
// export const productReducer = productSlice.reducer;
