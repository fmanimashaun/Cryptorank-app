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
  exchangerList: [],
  filterExchange: [],
  searchFilter: false,
};

const exchangerSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {
    filterBySearch: (state, action) => ({
      ...state,
      filterExchange: state.exchangerList.filter(
        (exchanger) => exchanger.name.toLowerCase().includes(action.payload.toLowerCase()),
      ),
      searchFilter: true,
    }),
    filterByCountry: (state, action) => ({
      ...state,
      filterExchange: state.exchangerList.filter(
        (exchanger) => exchanger.country === action.payload,
      ),
      searchFilter: false,
    }),
    closeSearchFilter: (state) => ({
      ...state,
      searchFilter: false,
    }),
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
