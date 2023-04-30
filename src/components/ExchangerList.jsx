import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import Style from 'assets/scss/exchangerList.module.scss';
import {
  fetchExchangers,
  filterByCountry,
} from 'features/exchanger/exchangerSlice';

const ExchangerList = () => {
  const {
    isLoading,
    error,
    exchangerList,
    filterExchange,
    searchFilter,
  } = useSelector((state) => state.exchanger);
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState('All Countries');

  useEffect(() => {
    dispatch(fetchExchangers());
  }, [dispatch]);

  const country = [
    ...new Set(exchangerList.map((exchanger) => exchanger.country)),
  ];

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    dispatch(filterByCountry(e.target.value));
  };

  const exchangers = filterExchange.length ? filterExchange : exchangerList;

  const title = selectedCountry === 'All Countries' ? 'All Countries' : selectedCountry;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && !isLoading && <p>{error}</p>}
      {!isLoading && !error && !exchangerList.length && (
        <p>No exchanger found</p>
      )}
      {!isLoading && !error && exchangerList.length && (
        <>
          <Container>
            <Row className="justify-content-between align-items-center">
              <Row className="justify-content-between align-items-center pt-3 pb-3">
                <Col>
                  <h3 className={Style.title}>
                    {searchFilter ? 'Search Results' : title}
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
      )}
    </>
  );
};

export default ExchangerList;
