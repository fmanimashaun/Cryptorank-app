import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card, Button, Container, Row, Col, Image, ProgressBar,
} from 'react-bootstrap';
import determineColor from 'utils/determineColor';

const ExchangerDetails = () => {
  const location = useLocation();
  const exchangeData = location.state;

  console.log(exchangeData);

  if (!exchangeData) {
    return <p>No exchange data provided.</p>;
  }

  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <Card>
            {/* Logo and name in the card header */}
            <Card.Header className="d-flex justify-content-center align-items-center">
              <Image src={exchangeData.image} alt={`${exchangeData.name} Logo`} width={50} height={50} roundedCircle className="me-3" />
              <Card.Title className="mb-0">{exchangeData.name}</Card.Title>
            </Card.Header>

            {/* Other details in the card body */}
            <Card.Body>
              <Card.Text>
                <strong>Country:</strong>
                {' '}
                {exchangeData.country}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong>
                {' '}
                {exchangeData.description ? exchangeData.description : 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Trading Incentive:</strong>
                {' '}
                {exchangeData.has_trading_incentive ? 'Available' : 'Not Available'}
              </Card.Text>
              <Card.Text>
                <strong>24h Trade Volume (BTC):</strong>
                {' '}
                {exchangeData.trade_volume_24h_btc.toFixed(2)}
                {' '}
                BTC
              </Card.Text>
              <Card.Text>
                <strong>Normalized 24h Trade Volume (BTC):</strong>
                {' '}
                {exchangeData.trade_volume_24h_btc_normalized.toFixed(2)}
                {' '}
                BTC
              </Card.Text>
              <Card.Text>
                <strong>Trust Score:</strong>
                {' '}
                <ProgressBar
                  now={exchangeData.trust_score * 10}
                  label={`${exchangeData.trust_score}/10`}
                  variant={determineColor(exchangeData.trust_score)}
                  style={{ flexGrow: 1 }}
                />
              </Card.Text>
              <Card.Text>
                <strong>Trust Score Rank:</strong>
                {' '}
                #
                {exchangeData.trust_score_rank}
              </Card.Text>
              <Card.Text>
                <strong>Established:</strong>
                {' '}
                {exchangeData.yearEstablished}
              </Card.Text>
              <Button variant="primary" href={exchangeData.url} target="_blank" rel="noopener noreferrer">
                Visit
                {' '}
                {exchangeData.name}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExchangerDetails;
