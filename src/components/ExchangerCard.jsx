import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Style from 'assets/scss/exchangercard.module.scss';

const ExchangerCard = ({ exchanger }) => (
  <Card className={Style.card}>
    <Card.Img
      src={exchanger.image}
      className={Style.image}
      alt={exchanger.name}
    />
    <Card.Body className={Style.body}>
      <Card.Title>{exchanger.name}</Card.Title>
      <Card.Text className={Style.text}>{`Ranking: ${exchanger.trust_score_rank}`}</Card.Text>
      <Button variant="primary" className={Style.btn}>
        See Details
      </Button>
    </Card.Body>
  </Card>
);

ExchangerCard.propTypes = {
  exchanger: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    trust_score_rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExchangerCard;
