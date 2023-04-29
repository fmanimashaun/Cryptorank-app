import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.coingecko.com/api/v3/exchanges';

export const fetchExchangers = createAsyncThunk(
  'stocks/fetchStock',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  exchangerList: [],
};

const financialSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangers.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchExchangers.fulfilled, (state, action) => ({
        ...state,
        stock: action.payload,
        loading: false,
      }))
      .addCase(fetchExchangers.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }));
  },
});

export default financialSlice.reducer;
