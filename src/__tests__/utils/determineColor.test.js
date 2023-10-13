import determineColor from 'utils/determineColor';

describe('determineColor', () => {
  it('should return "danger" for scores 3 and below', () => {
    expect(determineColor(1)).toBe('danger');
    expect(determineColor(3)).toBe('danger');
  });

  it('should return "warning" for scores between 4 and 6', () => {
    expect(determineColor(4)).toBe('warning');
    expect(determineColor(5)).toBe('warning');
    expect(determineColor(6)).toBe('warning');
  });

  it('should return "success" for scores above 6', () => {
    expect(determineColor(7)).toBe('success');
    expect(determineColor(10)).toBe('success');
  });
});
