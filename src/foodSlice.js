import { createSlice } from '@reduxjs/toolkit';
import { foodInformation } from './util/foodInformation';

const initialState = {
  foodArray: foodInformation,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
});

export const foodReducer = foodSlice.reducer;

export const selectAllFood = (state) => {
  return state.food.foodArray;
};

export const selectCurrentItemById = (id) => (state) => {
  return state.food.foodArray.filter((i) => i.id === id);
};
