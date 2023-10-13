import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import Style from 'assets/scss/exchangerList.module.scss';
import { filterByCountry } from 'features/exchanger/exchangerSlice';

const ExchangerListHeader = () => {
  const { exchangerList, searchFilter, noResult } = useSelector(
    (state) => state.exchanger,
  );
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState('All Countries');

  const country = [
    ...new Set(
      exchangerList.map((exchanger) => exchanger.country).filter(Boolean),
    ),
  ];

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    dispatch(filterByCountry(e.target.value));
  };

  const title = selectedCountry === 'All Countries' ? 'All Countries' : selectedCountry;

  return (
    <Container fluid className={Style.heading}>
      <Container className="px-0">
        <Row className="justify-content-between align-items-center py-1">
          <Col>
            <h3 className={Style.title}>
              {searchFilter && !noResult ? 'Search Results' : title}
              {noResult && 'No Search Result'}
            </h3>
          </Col>
          <Col xs="auto" className={Style.select}>
            <Form.Select
              aria-label="Select country"
              value={selectedCountry}
              onChange={handleChange}
              className={Style.select__form}
            >
              {searchFilter && <option value="">Select Country</option>}
              {!searchFilter && (
                <option value="All Countries">All Countries</option>
              )}
              {country.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExchangerListHeader;
