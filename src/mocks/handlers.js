import { rest } from 'msw';
import exchangerList from 'data';

const handlers = [
  rest.get('https://api.coingecko.com/api/v3/exchanges', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([...exchangerList]),
  )),
];

export default handlers;
