import express from 'express';
import { CitiesRouter } from './Cities';
import { StatusRouter } from './Utility';

export const app = express();

app.use(function(_req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  next();
});

app.use("/", CitiesRouter);
app.use("/", StatusRouter);
