import { configureStore } from '@reduxjs/toolkit';
import exchangerReducer from 'features/exchanger/exchangerSlice';

const store = configureStore({
  reducer: {
    exchanger: exchangerReducer,
  },
});

export default store;
