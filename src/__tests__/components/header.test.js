import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Header from 'components/Header';
import exchangerData from 'data';

const mockStore = configureMockStore();
const exchangerMockData = exchangerData;

describe('Header component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: exchangerMockData,
        isLoading: false,
      },
    });
  });

  it('renders without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders without errors showing details page', () => {
    const { container } = render(
      <Provider store={store}>
        {/* Use BrowserRouter with initialEntries */}
        <BrowserRouter initialEntries={['/details']} initialIndex={0}>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders without errors showing route not found', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/details" element={<Header />} />
            {/* Add a catch-all route for testing route not found */}
            <Route path="*" element={<div data-testid="not-found">Route not found</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );

    // Check if the "Route not found" element is in the document
    const notFoundElement = screen.getByTestId('not-found');
    expect(notFoundElement).toBeInTheDocument();
  });

  it('displays the logo and brand name', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Ensure the logo is displayed
    const logo = getByAltText('page logo');
    expect(logo).toBeInTheDocument();

    // Ensure the brand name "CRYPTORANK" is displayed
    const brandName = getByText('CRYPTORANK');
    expect(brandName).toBeInTheDocument();
  });

  it('handles the search button click correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Header component with no data', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: [],
        isLoading: false,
      },
    });
  });

  it('renders without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays the logo and brand name', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Ensure the logo is displayed
    const logo = getByAltText('page logo');
    expect(logo).toBeInTheDocument();

    // Ensure the brand name "CRYPTORANK" is displayed
    const brandName = getByText('CRYPTORANK');
    expect(brandName).toBeInTheDocument();
  });

  it('handles the search button click correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Header component with loading state', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: [],
        isLoading: true,
      },
    });
  });

  it('renders without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays the logo and brand name', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Ensure the logo is displayed
    const logo = getByAltText('page logo');
    expect(logo).toBeInTheDocument();

    // Ensure the brand name "CRYPTORANK" is displayed
    const brandName = getByText('CRYPTORANK');
    expect(brandName).toBeInTheDocument();
  });

  it('handles the search button click correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Header component with error state', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: [],
        isLoading: false,
        error: 'Error',
      },
    });
  });

  it('renders without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays the logo and brand name', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Ensure the logo is displayed
    const logo = getByAltText('page logo');
    expect(logo).toBeInTheDocument();

    // Ensure the brand name "CRYPTORANK" is displayed
    const brandName = getByText('CRYPTORANK');
    expect(brandName).toBeInTheDocument();
  });

  it('handles the search button click correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

describe('search functionality', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exchanger: {
        exchangerList: exchangerData,
        isLoading: false,
      },
    });
  });

  it('handles the search functionality correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    // Type in the search input
    fireEvent.change(searchInput, { target: { value: 'binance' } });

    // Ensure the search input value is updated
    expect(searchInput.value).toBe('binance');
  });

  it('dispatches the search action correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    // Type in the search input
    fireEvent.change(searchInput, { target: { value: 'binance' } });

    // Ensure the search input value is updated
    expect(searchInput.value).toBe('binance');

    // Ensure the search action is dispatched correctly
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'exchanger/filterBySearch',
        payload: 'binance',
      },
    ]);
  });

  it('handle the search close button correctly', () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Find and click the search button
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    // Ensure the search input is displayed
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    // Type in the search input
    fireEvent.change(searchInput, { target: { value: 'binance' } });

    // Ensure the search input value is updated
    expect(searchInput.value).toBe('binance');

    // Find and click the search close button
    const searchCloseButton = getByTestId('search-close-button');
    fireEvent.click(searchCloseButton);

    // Ensure the search input is removed
    expect(queryByTestId('search-input')).not.toBeInTheDocument();
  });
});
