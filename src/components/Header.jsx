import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterBySearch,
  closeSearchFilter,
} from 'features/exchanger/exchangerSlice';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import LOGO from 'assets/images/logo.png';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import Style from 'assets/scss/header.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === '/') {
      setShowBackButton(false);
    } else if (pathName === '/details') {
      setShowBackButton(true);
      setPageTitle(`${location.state.name} Details`);
    } else {
      setShowBackButton(true);
      setPageTitle('ERROR 🚫');
    }
  }, [location]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchCloseClick = () => {
    setShowSearch(false);
    dispatch(closeSearchFilter());
  };

  return (
    <Container fluid as="header" className={`text-light py-2 ${Style.header}`}>
      <Container>
        {!showBackButton ? (
          <Row className="align-items-center">
            <Col xs="auto" className="d-flex align-items-center gap-3 p-0">
              <img src={LOGO} alt="page logo" className={Style.header__logo} />
              <h1 className={`h4 mb-0 ${Style.header__brand}`}>CRYPTORANK</h1>
            </Col>
            <Col className="text-end pe-0">
              {!showSearch ? (
                <>
                  <Button
                    data-testid="search-button"
                    className={`me-2 ${Style.header__btn}`}
                    onClick={handleSearchClick}
                  >
                    <FaSearch color="white" size={24} />
                  </Button>
                  <Button className={Style.header__btn}>
                    <FaMicrophone color="white" size={24} />
                  </Button>
                </>
              ) : (
                <Form className="d-flex align-items-center">
                  <Form.Control
                    data-testid="search-input"
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    onChange={(e) => dispatch(filterBySearch(e.target.value))}
                  />
                  <Button
                    data-testid="search-close-button"
                    className={Style.header__btn}
                    onClick={handleSearchCloseClick}
                  >
                    Close
                  </Button>
                </Form>
              )}
            </Col>
          </Row>
        ) : (
          <Row className="align-items-center position-relative">
            <Button
              className={`me-2 ${Style.header__btn} position-absolute left-0`}
              onClick={handleBackButtonClick}
            >
              <FaArrowLeft color="white" size={24} />
            </Button>
            <h1 className={`h4 mb-0 text-center ${Style.header__brand}`}>
              {pageTitle}
            </h1>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default Header;
