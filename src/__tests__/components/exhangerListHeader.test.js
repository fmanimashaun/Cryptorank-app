import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ExchangerListHeader from 'components/ExchangerListHeader';
import exchangerData from 'data';

const mockStore = configureMockStore();
const exchangerMockData = exchangerData;

describe('ExchangerListHeader component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: exchangerMockData,
        isLoading: false,
        searchFilter: false,
        noResult: false,
      },
    });
  });
  it('renders without errors', () => {
    render(
      <Provider store={store}>
        <ExchangerListHeader />
      </Provider>,
    );
    // Get all elements with the text "All Countries"
    const allCountryElements = screen.getAllByText('All Countries');

    // Ensure at least one element with the text is present
    expect(allCountryElements.length).toBeGreaterThan(0);
  });

  it('handles country selection', () => {
    render(
      <Provider store={store}>
        <ExchangerListHeader />
      </Provider>,
    );

    const selectElement = screen.getByLabelText('Select country');

    // Simulate changing the selected country
    fireEvent.change(selectElement, { target: { value: 'United States' } });

    // Check if the selected country has been updated
    expect(selectElement.value).toBe('United States');
  });

  it('handles search result display', () => {
    store = mockStore({
      exchanger: {
        exchangerList: [],
        searchFilter: true,
        noResult: true,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerListHeader />
      </Provider>,
    );

    // Check if the "No Search Result" text is present in the document
    const noSearchResultElement = screen.queryByText('No Search Result');
    expect(noSearchResultElement).toBeInTheDocument();
  });
});
