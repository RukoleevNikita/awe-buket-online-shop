// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//
// import axios from 'axios';
//
// // async function getCollection() {
// //   try {
// //     const res = await fetch('http://localhost:3001/api/collection', { cache: 'no-store'});
// //     return res.json();
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };
//
// // export const fetchProducts = createAsyncThunk('getallproducts/fetchProducts', async () => {
// // const data = await fetch('http://localhost:3001/api/collection');
// //
// // return data.json();
// // });
//
// const initialState = {
//   products: {
//     items: [],
//     status: 'loading',
//   },
// };
//
// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducer: {},
//   extraReducers: {
//     // get products
//     [fetchProducts.pending]: (state, action) => {
//       state.products.items = [];
//       state.products.status = 'loading';
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.products.items = action.payload;
//       state.products.status = 'loaded';
//     },
//     [fetchProducts.rejected]: state => {
//       state.products.items = [];
//       state.products.status = 'error';
//     }
//   }
// });
//
// export const productsReducer = productsSlice.reducer;
// // export const productReducer = productSlice.reducer;
