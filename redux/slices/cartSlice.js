import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const calcTotalPrice = items => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
const calcTotalCount = items => items.reduce((sum, item) => sum + item.count, 0);

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },

    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },

    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    // clearItems(state) {
    //   state.items = [];
    //   state.totalPrice = 0;
    // },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, minusItem, removeItem } = cartSlice.actions;
// export const productReducer = productSlice.reducer;
