import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import ExchangerCard from 'components/ExchangerCard';
import CustomPagination from 'components/Pagination';
import getItemsPerPage from 'utils/getItemsPerPage';
import Style from 'assets/scss/exchangerList.module.scss';

const ExchangerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]); // Add this state
  const {
    isLoading, error, exchangerList, filterExchange,
  } = useSelector(
    (state) => state.exchanger,
  );

  const windowWidth = useRef(window.innerWidth);

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(windowWidth.current));

  useEffect(() => {
    function handleResize() {
      windowWidth.current = window.innerWidth;
      setItemsPerPage(getItemsPerPage(windowWidth.current));
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const exchangers = filterExchange?.length ? filterExchange : exchangerList;

  useEffect(() => {
    // Derived state
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const items = exchangers.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(items); // Set the items using the state setter
  }, [filterExchange, currentPage, exchangers, itemsPerPage]);

  return (
    <Container className={`px-0 ${Style.list}`}>
      {isLoading && !error ? (
        <Spinner
          animation="border"
          role="status"
          variant="light"
          className={Style.spinner}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}

      {!isLoading && error ? <p>{error}</p> : null}

      {!isLoading && !error && exchangers?.length === 0 ? (
        <p>No exchanger found</p>
      ) : null}

      {!isLoading && !error && exchangers?.length ? (
        <Row className="g-3">
          {currentItems.map((exchanger) => (
            <Col xs={12} md={6} lg={4} key={exchanger.id}>
              <ExchangerCard exchanger={exchanger} />
            </Col>
          ))}
        </Row>
      ) : null}

      {!isLoading && !error && exchangers?.length ? (
        <CustomPagination
          totalItems={exchangers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </Container>
  );
};

export default ExchangerList;
