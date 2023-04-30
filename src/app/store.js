import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import financialReducer from 'features/exchanger/exchangerSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    financial: financialReducer,
  },
});

export default store;
