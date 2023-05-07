import express from 'express';

export const StatusRouter = express.Router();

StatusRouter.get('/status', async (_req, res, _next) => {
  res.status(200);
  res.end();
});
