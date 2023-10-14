import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Style from 'assets/scss/marketoverview.module.scss';

const MarketOverview = () => {
  const { exchangerList, isLoading } = useSelector((state) => state.exchanger);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const exchanger = exchangerList
    .map((exchanger) => ({
      name: exchanger.name,
      volume: exchanger.trade_volume_24h_btc,
    }))
    .sort((a, b) => b.volume - a.volume);

  const topTwoeExchanger = exchanger.slice(0, 2);
  const othersExchanger = exchanger.slice(2).reduce(
    (acc, cur) => ({
      name: 'Others',
      volume: acc.volume + cur.volume,
    }),
    { name: 'Others', volume: 0 },
  );

  const exchangerData = [...topTwoeExchanger, othersExchanger];

  const data = {
    labels: exchangerData.map((exchanger) => exchanger.name),
    datasets: [
      {
        label: 'BTC volume',
        data: exchangerData.map((exchanger) => exchanger.volume),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          boxWidth: 15,
          padding: 15,
          color: 'white',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'BTC Volume',
        font: {
          size: 24,
          weight: 'bold',
        },
      },
    },
    responsive: false,
    maintainAspectRatio: false,
    maxWidth: 800,
  };

  return (
    <Container fluid className={Style.overview}>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} className="d-flex my-3 justify-content-center">
          <h2 className={`text-center text-md-start fw-bold ${Style.header}`}>
            Market Snapshot:
            <br />
            <span>BTC Trading Volume in Last 24 Hours</span>
          </h2>
        </Col>
        <Col xs={12} md={6} className="my-3" style={{ width: 'fit-content' }}>
          {isLoading && (
            <Spinner
              animation="border"
              role="status"
              variant="light"
              className={Style.spinner}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!isLoading && <Doughnut data={data} options={options} />}
        </Col>
      </Row>
    </Container>
  );
};

export default MarketOverview;
