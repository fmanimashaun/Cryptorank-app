function getItemsPerPage(width) {
  if (width < 768) {
    return 2;
  }
  if (width > 767 && width < 992) {
    return 4;
  }
  return 6;
}

export default getItemsPerPage;
