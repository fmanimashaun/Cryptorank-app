function getItemsPerPage(width) {
  if (width < 768) {
    return 4;
  }
  return 6;
}

export default getItemsPerPage;
