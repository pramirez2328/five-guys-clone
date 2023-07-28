import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { ordersReducer } from './orderSlice';
import { foodReducer } from './foodSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
