import axios from 'axios';

const API_KEY = 'bef774f1ad9fef5a88285cdd75d86a17';
const STOCK_SCREENER_ENDPOINT = `https://financialmodelingprep.com/api/v3/stock-screener?apikey=${API_KEY}&country=US&limit=`;
const COMPANY_PROFILE_ENDPOINT = 'https://financialmodelingprep.com/api/v3/profile/';
const HISTORICAL_PRICE_ENDPOINT = 'https://financialmodelingprep.com/api/v3/historical-price-full/';

const fetchStock = async (limit) => {
  const res = await axios.get(`${STOCK_SCREENER_ENDPOINT}${limit}`);
  const symbols = res.data.map((stock) => stock.symbol);
  const promises = symbols.map(async (symbol) => {
    const companyProfile = await axios.get(
      `${COMPANY_PROFILE_ENDPOINT}${symbol}?apikey=${API_KEY}`,
    );
    const historicalPrice = await axios.get(
      `${HISTORICAL_PRICE_ENDPOINT}${symbol}?serietype=line&apikey=${API_KEY}`,
    );
    return {
      companyProfile: companyProfile.data,
      historicalPrice: historicalPrice.data,
    };
  });
  const data = await Promise.all(promises);
  return data;
};

export default fetchStock;
