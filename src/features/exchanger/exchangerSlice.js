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
  isLoading: false,
  error: null,
  searchFilter: false,
  selectedCountry: 'All Countries',
  noResult: false,
  exchangerList: [],
  filterExchange: [],
};

const exchangerSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      const filteredResult = state.exchangerList.filter(
        (exchanger) => exchanger.name.toLowerCase().includes(action.payload.toLowerCase()),
      );

      return ({
        ...state,
        filterExchange: filteredResult,
        searchFilter: true,
        noResult: filteredResult.length === 0,
        selectedCountry: '',
      });
    },
    filterByCountry: (state, action) => {
      const filteredResult = state.exchangerList.filter(
        (exchanger) => exchanger.country === action.payload,
      );
      return ({
        ...state,
        filterExchange: filteredResult,
        searchFilter: false,
        noResult: action.payload === 'All Countries' ? false : filteredResult.length === 0,
        selectedCountry: action.payload,
      });
    },
    closeSearchFilter: (state) => {
      const filteredResult = state.exchangerList.filter(
        (exchanger) => exchanger.country === state.selectedCountry,
      );
      return ({
        ...state,
        searchFilter: false,
        filterExchange: filteredResult,
        selectedCountry: 'All Countries',
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangers.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchExchangers.fulfilled, (state, action) => ({
        ...state,
        exchangerList: action.payload,
        isLoading: false,
      }))
      .addCase(fetchExchangers.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      }));
  },
});

export const { filterBySearch, filterByCountry, closeSearchFilter } = exchangerSlice.actions;

export default exchangerSlice.reducer;
