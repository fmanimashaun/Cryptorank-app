import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import LOGO from 'assets/images/logo.png';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import Style from 'assets/scss/header.module.scss';

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchCloseClick = () => {
    setShowSearch(false);
  };

  return (
    <Container fluid as="header" className={`text-light py-3 ${Style.header}`}>
      <Container>
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex align-items-center gap-3">
            <img src={LOGO} alt="page logo" className={Style.header__logo} />
            <h1 className={`h4 mb-0 ${Style.header__brand}`}>CRYPTORANK</h1>
          </Col>
          <Col className="text-end">
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
      </Container>
    </Container>
  );
}

export default Header;
