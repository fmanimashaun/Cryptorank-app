import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import Style from 'assets/scss/exchangerList.module.scss';
import { filterByCountry } from 'features/exchanger/exchangerSlice';

const ExchangerListHeader = () => {
  const {
    exchangerList, searchFilter, noResult, selectedCountry,
  } = useSelector((state) => state.exchanger);
  const dispatch = useDispatch();
  const selectRef = useRef(null);

  const country = [
    ...new Set(
      exchangerList.map((exchanger) => exchanger.country).filter(Boolean),
    ),
  ];

  const handleChange = (e) => {
    dispatch(filterByCountry(e.target.value));
  };

  const title = selectedCountry === 'All Countries' ? 'All Countries' : selectedCountry;
  const isSearchResults = searchFilter && !noResult;
  const isNoSearchResult = searchFilter && noResult;
  let displayTitle;

  useEffect(() => {
    if (searchFilter && selectRef.current) {
      selectRef.current.value = '';
    } else if (!searchFilter && selectRef.current) {
      selectRef.current.value = 'All Countries';
    }
  }, [searchFilter]);

  if (isSearchResults) {
    displayTitle = 'Search Results';
  } else if (isNoSearchResult) {
    displayTitle = 'No Search Result';
  } else {
    displayTitle = title;
  }

  return (
    <Container fluid className={Style.heading}>
      <Container className="px-0">
        <Row className="justify-content-between align-items-center py-1">
          <Col>
            <h3 className={Style.title}>{displayTitle}</h3>
          </Col>
          <Col xs="auto" className={Style.select}>
            <Form.Select
              aria-label="Select country"
              value={selectedCountry}
              onChange={handleChange}
              className={Style.select__form}
              ref={selectRef}
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
