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
    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    // Use a more generic role like "button" or "link" for selection
    const exchangerCardButtons = screen.getAllByRole('button', { name: /See Details/i });
    expect(exchangerCardButtons.length).toBe(6);
  });

  it('navigates to details page when clicking on an exchanger card', () => {
    render(
      <Provider store={store}>
        <ExchangerList />
      </Provider>,
    );

    // Use a more generic role like "button" or "link" for selection
    const exchangerCardButtons = screen.getAllByRole('button', { name: /See Details/i });
    fireEvent.click(exchangerCardButtons[0]);

    expect(navigateMock).toHaveBeenCalledWith('/details', { state: exchangerMockData[0] });
  });
});
