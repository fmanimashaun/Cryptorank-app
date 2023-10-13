import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExchangers } from 'features/exchanger/exchangerSlice';
import MarketOverview from 'components/MarketOverview';
import ExchangerList from 'components/ExchangerList';
import ExchangerListHeader from 'components/ExchangerListHeader';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExchangers());
  }, [dispatch]);

  return (
    <>
      <MarketOverview />
      <ExchangerListHeader />
      <ExchangerList />
    </>
  );
};

export default Home;
