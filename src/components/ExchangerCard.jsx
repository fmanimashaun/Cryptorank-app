import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Style from 'assets/scss/exchangercard.module.scss';
import { BsArrowRightCircle } from 'react-icons/bs';

const ExchangerCard = ({ exchanger, showDetails }) => (
  <Card className={Style.card}>
    <Card.Img
      src={exchanger.image}
      className={Style.image}
      alt={exchanger.name}
    />
    <Card.Body className={Style.body}>
      <div className={Style.wrapper}>
        <Card.Title>{exchanger.name}</Card.Title>
        <Card.Text className={Style.text}>{exchanger.trust_score_rank}</Card.Text>
      </div>

      <Button
        className={Style.btn}
        onClick={() => showDetails(exchanger.id)}
      >
        <BsArrowRightCircle className={Style.icon} />
      </Button>
    </Card.Body>
  </Card>
);

ExchangerCard.propTypes = {
  exchanger: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    trust_score_rank: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default ExchangerCard;
