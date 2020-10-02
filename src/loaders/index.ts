import { Express } from "express";

import express from "./express";
import middlewares from "./middlewares";
import mongodb from "./mongodb";
import routes from "./routes";

export default (app: Express): void => {
  express(app);
  middlewares(app);
  routes(app);
  mongodb()
};
