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
    removeAll: (state) => {
      state.ordersArray = [];
    },
    addIngredient: (state, action) => {
      const id = action.payload.id;
      const tempArr = state.ordersArray.filter((i) => i.id !== id);
      state.ordersArray = [...tempArr, action.payload];
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { addItem, removeAll, addIngredient } = ordersSlice.actions;

export const selectAllOrders = (state) => {
  return state.orders.ordersArray;
};

export const selectCurrentItem = (state) => {
  const arr = state.orders.ordersArray;
  return arr[arr.length - 1];
};
