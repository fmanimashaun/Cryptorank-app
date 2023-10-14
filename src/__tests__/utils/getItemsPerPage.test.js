import getItemsPerPage from 'utils/getItemsPerPage';

describe('getItemsPerPage', () => {
  it('should return 4 for widths less than 768', () => {
    expect(getItemsPerPage(500)).toBe(4);
    expect(getItemsPerPage(767)).toBe(4);
  });

  it('should return 6 for widths 768 and above', () => {
    expect(getItemsPerPage(992)).toBe(6);
    expect(getItemsPerPage(1200)).toBe(6);
  });
});
