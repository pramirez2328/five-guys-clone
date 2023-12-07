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
    removeItem: (state, action) => {
      const id = action.payload;
      const newArr = state.ordersArray.filter((i) => i.id !== id);
      state.ordersArray = newArr;
    },
    addIngredient: (state, action) => {
      const id = action.payload.id;
      const tempArr = state.ordersArray.filter((i) => i.id !== id);
      state.ordersArray = [...tempArr, action.payload];
    },
    removeAllItems: (state, action) => {
      console.log(action.payload);
      state.ordersArray = action.payload;
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { addItem, removeItem, updateItem, addIngredient, removeAllItems } = ordersSlice.actions;

export const selectAllOrders = (state) => {
  return state.orders.ordersArray;
};

export const selectCurrentItem = (state, id) => {
  const current = state.orders.ordersArray.find((i) => i.id == id);
  return current;
};

export const totalCost = (state) => {
  const arr = state.orders.ordersArray;
  let total = 0;
  for (let order of arr) {
    total += order.price;
  }
  return total;
};
