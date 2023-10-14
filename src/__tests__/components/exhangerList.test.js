import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import ExchangerList from 'components/ExchangerList';
import exchangerData from 'data';

const mockStore = configureMockStore();
const exchangerMockData = exchangerData;

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ExchangerList component', () => {
  let store;
  let navigateMock;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        isLoading: false,
        error: null,
        exchangerList: exchangerMockData,
        filterExchange: [],
        noResult: false,
        searchFilter: false,
        selectedCountry: 'All Countries',
      },
    });

    navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
  });

  it('renders loading spinner when isLoading is true', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const loadingSpinner = screen.getByRole('status');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    const errorMessage = 'An error occurred';
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        error: errorMessage,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders "No exchanger found" when exchangers is empty', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: [],
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const noExchangerFound = screen.getByText('No exchanger found');
    expect(noExchangerFound).toBeInTheDocument();
  });

  it('renders exchanger cards when exchangers are present', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: exchangerMockData,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const exchangerCardButtons = screen.getAllByTestId('exchanger-button');
    expect(exchangerCardButtons.length).toBe(6);
  });

  it('renders exchanger cards when filterExchange are present', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: exchangerMockData,
        filterExchange: exchangerMockData.slice(0, 3),
        selectedCountry: 'United States',
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const exchangerCardButtons = screen.getAllByTestId('exchanger-button');
    expect(exchangerCardButtons.length).toBe(3);
  });

  it('renders exchanger cards when search is true and there result', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: exchangerMockData,
        filterExchange: exchangerMockData.slice(0, 3),
        searchFilter: true,
        noResult: true,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const exchangerCardButtons = screen.getAllByTestId('exchanger-button');
    expect(exchangerCardButtons.length).toBe(3);
  });

  it('when search is false and selected country is empty string', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: exchangerMockData,
        filterExchange: exchangerMockData.slice(0, 3),
        searchFilter: false,
        noResult: false,
        selectedCountry: '',
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const exchangerCardButtons = screen.getAllByTestId('exchanger-button');
    expect(exchangerCardButtons.length).toBe(3);
  });
  it('navigates to details page when clicking on an exchanger card', () => {
    store = mockStore({
      exchanger: {
        ...store.getState().exchanger,
        exchangerList: exchangerMockData,
      },
    });

    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    const exchangerCardButtons = screen.getAllByTestId('exchanger-button');
    fireEvent.click(exchangerCardButtons[0]);

    expect(navigateMock).toHaveBeenCalledWith('/details', { state: exchangerMockData[0] });
  });
});
