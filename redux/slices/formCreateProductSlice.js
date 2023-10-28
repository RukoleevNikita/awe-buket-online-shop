import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // formData: {
  //   name: '',
  //   category: '',
  //   price: '',
  //   description: ''
  // }
  formData: {},
};
// переписать и написать собственный запрос к редаксу, использовать получение данных от редакса прир клике, для этого нужно переписать стор без использования редакс туулкит, взять пример из путь самурая
const formCreateProductSlice = createSlice({
  name: 'formCreate',
  initialState,
  reducers: {
    addData(state, action) {
      state.formData = { ...action.payload };
    },
  },
});

export const { addData } = formCreateProductSlice.actions;
export const formDataCreateProductReducer = formCreateProductSlice.reducer;
