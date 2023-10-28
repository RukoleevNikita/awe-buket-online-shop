import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cartSlice';
import { productsReducer } from './slices/productsSlice';
// import { productReducer } from './slices/productSlice';
// import { formDataCreateProductReducer } from './slices/formCreateProductSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    // product: productReducer | null,
  },
});
