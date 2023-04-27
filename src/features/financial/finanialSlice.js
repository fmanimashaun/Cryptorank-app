import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'bef774f1ad9fef5a88285cdd75d86a17';
const STOCK_SCREENER_ENDPOINT = `https://financialmodelingprep.com/api/v3/stock-screener?apikey=${API_KEY}&country=US&limit=`;
const COMPANY_PROFILE_ENDPOINT = 'https://financialmodelingprep.com/api/v3/profile/';
const HISTORICAL_PRICE_ENDPOINT = 'https://financialmodelingprep.com/api/v3/historical-price-full/';

export const fetchStock = createAsyncThunk(
  'stocks/fetchStock',
  async (limit, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${STOCK_SCREENER_ENDPOINT}${limit}`);
      const symbols = res.data.map((stock) => stock.symbol);
      const promises = symbols.map(async (symbol) => {
        const companyProfile = await axios.get(
          `${COMPANY_PROFILE_ENDPOINT}${symbol}?apikey=${API_KEY}`,
        );
        const historicalPrice = await axios.get(
          `${HISTORICAL_PRICE_ENDPOINT}${symbol}?serietype=line&apikey=${API_KEY}`,
        );
        return {
          companyProfile: companyProfile.data,
          historicalPrice: historicalPrice.data,
        };
      });
      const data = await Promise.all(promises);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  stock: [],
};

const financialSlice = createSlice({
  name: 'financial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStock.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchStock.fulfilled, (state, action) => ({
        ...state,
        stock: action.payload,
        loading: false,
      }))
      .addCase(fetchStock.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }));
  },
});

export default financialSlice.reducer;
