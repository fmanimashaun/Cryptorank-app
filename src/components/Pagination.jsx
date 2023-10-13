import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({
  totalItems, itemsPerPage, currentPage, onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSelect = (eventKey) => {
    onPageChange(eventKey);
  };

  const getPaginationItems = () => {
    const items = [];

    // Add first 3 pages
    for (let i = 1; i <= 3; i += 1) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handleSelect(i)}>
          {i}
        </Pagination.Item>,
      );
    }

    // Add ellipsis if there's a gap between initial pages and currentPage
    if (currentPage > 3 + 1) {
      items.push(<Pagination.Ellipsis key="ellipsis-start" />);
    }

    // Add currentPage, previous, and next pages
    if (currentPage > 3 && currentPage < totalPages - 2) {
      items.push(
        <Pagination.Item key={currentPage - 1} onClick={() => handleSelect(currentPage - 1)}>
          {currentPage - 1}
        </Pagination.Item>,
        <Pagination.Item key={currentPage} active onClick={() => handleSelect(currentPage)}>
          {currentPage}
        </Pagination.Item>,
        <Pagination.Item key={currentPage + 1} onClick={() => handleSelect(currentPage + 1)}>
          {currentPage + 1}
        </Pagination.Item>,
      );
    }

    // Add ellipsis if there's a gap between currentPage and last pages
    if (currentPage < totalPages - 2) {
      items.push(<Pagination.Ellipsis key="ellipsis-end" />);
    }

    // Add last 3 pages
    for (let i = totalPages - 2; i <= totalPages; i += 1) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handleSelect(i)}>
          {i}
        </Pagination.Item>,
      );
    }

    return items;
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handleSelect(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      />
      {getPaginationItems()}
      <Pagination.Next
        onClick={() => handleSelect(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

CustomPagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
