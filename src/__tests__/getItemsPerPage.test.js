import getItemsPerPage from 'utils/getItemsPerPage';

describe('getItemsPerPage', () => {
  it('should return 2 for widths less than 768', () => {
    expect(getItemsPerPage(500)).toBe(2);
    expect(getItemsPerPage(767)).toBe(2);
  });

  it('should return 4 for widths between 768 and 991', () => {
    expect(getItemsPerPage(768)).toBe(4);
    expect(getItemsPerPage(900)).toBe(4);
    expect(getItemsPerPage(991)).toBe(4);
  });

  it('should return 6 for widths 992 and above', () => {
    expect(getItemsPerPage(992)).toBe(6);
    expect(getItemsPerPage(1200)).toBe(6);
  });
});
