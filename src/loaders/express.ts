import { Express } from "express";
import { json } from "body-parser";
import cors = require("cors");

export default (app: Express): void => {
  app.use(json());
  app.use(cors());
};
