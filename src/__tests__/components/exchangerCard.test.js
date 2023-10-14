import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExchangerCard from 'components/exchangerCard';

describe('ExchangerCard Component', () => {
  const mockExchanger = {
    image: 'test-image-url',
    name: 'Test Exchanger',
    trust_score_rank: 1,
    id: 'test-id',
  };

  it('renders without crashing', () => {
    const { getByText } = render(
      <ExchangerCard exchanger={mockExchanger} showDetails={() => {}} />,
    );
    expect(getByText('Test Exchanger')).toBeInTheDocument();
    expect(getByText('Ranking: 1')).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    const { getByAltText } = render(
      <ExchangerCard exchanger={mockExchanger} showDetails={() => {}} />,
    );
    expect(getByAltText('Test Exchanger')).toHaveAttribute('src', 'test-image-url');
  });

  it('calls showDetails with correct id on button click', () => {
    const mockShowDetails = jest.fn();
    const { getByText } = render(
      <ExchangerCard exchanger={mockExchanger} showDetails={mockShowDetails} />,
    );

    fireEvent.click(getByText('See Details'));
    expect(mockShowDetails).toHaveBeenCalledTimes(1);
    expect(mockShowDetails).toHaveBeenCalledWith('test-id');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <ExchangerCard exchanger={mockExchanger} showDetails={() => {}} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct content', () => {
    const { getByText, getByAltText } = render(
      <ExchangerCard exchanger={mockExchanger} showDetails={() => {}} />,
    );

    expect(getByAltText('Test Exchanger')).toHaveAttribute('src', 'test-image-url');
    expect(getByText('Test Exchanger')).toBeInTheDocument();
    expect(getByText('Ranking: 1')).toBeInTheDocument();
    expect(getByText('See Details')).toBeInTheDocument();
  });
});
