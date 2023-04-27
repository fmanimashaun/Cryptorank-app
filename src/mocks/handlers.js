import { rest } from 'msw';

const handlers = [
  rest.get('', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {},
    ]),
  )),
];

export default handlers;
