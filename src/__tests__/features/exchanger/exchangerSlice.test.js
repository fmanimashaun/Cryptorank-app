import { configureStore } from '@reduxjs/toolkit';
import { rest } from 'msw';
import server from 'mocks/server';
import exchangerReducer, {
  fetchExchangers, filterBySearch, filterByCountry, closeSearchFilter,
} from 'features/exchanger/exchangerSlice';
import exchangerData from 'data';

// Mock Store Setup
const store = configureStore({
  reducer: {
    exchanger: exchangerReducer,
  },
});

describe('exchangerSlice', () => {
  beforeEach(() => {
    store.dispatch({ type: 'reset' }); // Reset the state
  });

  describe('reducer and actions', () => {
    it('should handle initial state', () => {
      expect(store.getState().exchanger).toEqual({
        isLoading: false,
        error: null,
        searchFilter: false,
        noResult: false,
        exchangerList: [],
        filterExchange: [],
        selectedCountry: 'All Countries',
      });
    });

    it('should handle filterBySearch action', async () => {
      await store.dispatch(fetchExchangers());
      store.dispatch(filterBySearch('bin'));
      const state = store.getState().exchanger;

      const filteredResult = exchangerData.filter(
        (exchanger) => exchanger.name.toLowerCase().includes('bin'),
      );

      expect(state.searchFilter).toBe(true);
      expect(state.noResult).toBe(false);
      expect(state.filterExchange).toEqual(expect.arrayContaining([...filteredResult]));
    });

    it('should handle filterByCountry action', async () => {
      await store.dispatch(fetchExchangers());
      store.dispatch(filterByCountry('United States'));
      const state = store.getState().exchanger;

      const filteredResult = exchangerData.filter(
        (exchanger) => exchanger.country === 'United States',
      );

      expect(state.searchFilter).toBe(false);
      expect(state.filterExchange).toEqual(expect.arrayContaining([...filteredResult]));
    });

    it('should handle closeSearchFilter action', () => {
      store.dispatch(closeSearchFilter());
      const state = store.getState().exchanger;
      expect(state.searchFilter).toBe(false);
    });
  });

  describe('fetchExchangers async thunk', () => {
    it('fetches exchangers successfully', async () => {
      await store.dispatch(fetchExchangers());

      const state = store.getState().exchanger;
      expect(state.isLoading).toBe(false);
      expect(state.exchangerList).toEqual(expect.arrayContaining([...exchangerData]));
      expect(state.error).toBe(null);
    });

    it('handles fetch failure', async () => {
      // Use server.use() to temporarily override the handler
      server.use(
        rest.get('https://api.coingecko.com/api/v3/exchanges', (req, res, ctx) => res(
          ctx.status(500),
          ctx.json({ message: 'Internal Server Error' }),
        )),
      );
      // Dispatching the async thunk
      await store.dispatch(fetchExchangers());

      // Getting the updated state
      const state = store.getState().exchanger;

      // Asserting that the state was updated correctly
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Request failed with status code 500');
    });
  });
});
