import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MarketOverview from 'components/MarketOverview';
import exchangerData from 'data';

const mockStore = configureMockStore();
const exchangerMockData = exchangerData;
describe('MarketOverview Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: exchangerMockData,
        isLoading: false,
      },
    });
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MarketOverview />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays Market Snapshot header', () => {
    render(
      <Provider store={store}>
        <MarketOverview />
      </Provider>,
    );
    expect(screen.getByText('Market Snapshot:')).toBeInTheDocument();
    expect(
      screen.getByText(/BTC Trading Volume in Last 24 Hours/),
    ).toBeInTheDocument();
  });

  it('displays the Doughnut chart when not loading', () => {
    render(
      <Provider store={store}>
        <MarketOverview />
      </Provider>,
    );
    // Add expectations regarding chart rendering, e.g., labels, data-points, etc.
  });

  it('displays a spinner while loading', () => {
    store = mockStore({
      exchanger: {
        exchangerList: [],
        isLoading: true,
      },
    });
    render(
      <Provider store={store}>
        <MarketOverview />
      </Provider>,
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  // Add more test cases as per different scenarios.
});
