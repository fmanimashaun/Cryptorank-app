import React from 'react';
import { useLocation } from 'react-router-dom';
import Style from 'assets/scss/exchangerDetails.module.scss';

const ExchangerDetails = () => {
  const location = useLocation();
  const exchangeData = location.state;

  if (!exchangeData) {
    return <p>No exchange data provided.</p>;
  }

  return (
    <div className={Style.details}>
      <div className={Style.header}>
        <img src={exchangeData.image} alt={exchangeData.name} />
        <h3>
          {exchangeData.name}
          Details
        </h3>
      </div>
      <div className={Style.container}>
        <p className={Style.item}>
          <span>Country</span>
          <span>{exchangeData.country}</span>
        </p>
        <p className={Style.item}>
          <span>Website Url</span>
          <span>{exchangeData.url}</span>
        </p>
        <p className={Style.item}>
          <span>Year Established</span>
          <span>{exchangeData.year_established}</span>
        </p>
        <p className={Style.item}>
          <span>BTC Daily Trading Volume </span>
          <span>{exchangeData.trade_volume_24h_btc_normalized}</span>
        </p>
        <p className={Style.item}>
          <span>Trust Score Value</span>
          <span>{exchangeData.trust_score}</span>
        </p>
        <p className={Style.item}>
          <span>Has trading incentives </span>
          <span>{exchangeData.has_trading_incentive ? 'True' : 'False'}</span>
        </p>
      </div>
    </div>
  );
};

export default ExchangerDetails;
