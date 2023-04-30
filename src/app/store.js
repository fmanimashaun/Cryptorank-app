import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import exchangerReducer from 'features/exchanger/exchangerSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    exchanger: exchangerReducer,
  },
});

export default store;
