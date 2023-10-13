const determineColor = (score) => {
  if (score <= 3) return 'danger';
  if (score <= 6) return 'warning';
  return 'success';
};

export default determineColor;
