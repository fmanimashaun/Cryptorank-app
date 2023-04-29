import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import LOGO from 'assets/images/logo.png';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import Style from 'assets/scss/header.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === '/') {
      setShowBackButton(false);
    } else if (pathName === '/:id') {
      setShowBackButton(true);
      setPageTitle('Exchanger Details');
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
  };

  return (
    <Container fluid as="header" className={`text-light py-3 ${Style.header}`}>
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
                    type="text"
                    placeholder="Search"
                    className="me-2"
                  />
                  <Button
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
}

export default Header;
