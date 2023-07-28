import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordersArray: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        itemNumber: state.ordersArray.length + 1,
        ...action.payload,
      };
      state.ordersArray.push(newItem);
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { addItem } = ordersSlice.actions;

export const selectAllorders = (state) => {
  return state.orders.ordersArray;
};
