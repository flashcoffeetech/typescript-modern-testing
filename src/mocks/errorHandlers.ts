import { rest } from 'msw';

export const errorHandlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: 'Internal server error' }));
  }),
];
