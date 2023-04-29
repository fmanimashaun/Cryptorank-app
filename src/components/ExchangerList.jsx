import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import Style from 'assets/scss/exchangerList.module.scss';
import exchangerList from 'components/data';

const ExchangerList = () => {
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [exchangers, setExchangers] = useState(exchangerList);

  const country = [
    ...new Set(exchangerList.map((exchanger) => exchanger.country)),
  ];

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    if (event.target.value === 'All Countries') {
      setExchangers(exchangerList);
    } else {
      const filteredExchangers = exchangerList.filter(
        (exchanger) => exchanger.country === event.target.value,
      );
      setExchangers(filteredExchangers);
    }
  };

  const title = selectedCountry === 'All Countries' ? 'All Countries' : selectedCountry;

  return (
    <>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Row className="justify-content-between align-items-center pt-3 pb-3">
            <Col>
              <h3 className={Style.title}>{title}</h3>
            </Col>
            <Col xs="auto" className={Style.select}>
              <Form.Select
                aria-label="Select country"
                value={selectedCountry}
                onChange={handleChange}
                className={Style.select__form}
              >
                <option value="All Countries">All Countries</option>
                {country.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Row>
      </Container>
      <Row className={Style.list}>
        <Container>
          <ul>
            {exchangers.map((exchanger) => (
              <li key={exchanger.id}>{exchanger.name}</li>
            ))}
          </ul>
        </Container>
      </Row>
    </>
  );
};

export default ExchangerList;
