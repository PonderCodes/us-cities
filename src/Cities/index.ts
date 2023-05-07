import { CitiesController } from "./CitiesController";
import express from "express";

const controller = new CitiesController();
export const CitiesRouter = express.Router();

CitiesRouter.get("/city/:zip", async (req, res, _next) => {
  const zip = `${req.params.zip}`;
  const proximity = req.query['proximity'];

  if (proximity) {
    const distance = parseFloat(`${proximity!}`);
    const cities = await controller.getClosestCities(zip, distance);
    res.json(cities);
  } else {
    const city = await controller.getCity(zip);
    if (!city) {
      res.status(404);
      res.end();
    } else {
      res.json(city);
    }
  }
});
