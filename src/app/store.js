import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import financialReducer from 'features/financial/finanialSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    financial: financialReducer,
  },
});

export default store;
