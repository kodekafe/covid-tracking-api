import { Express, Router } from "express";
import { routes as VisitRoutes } from "../components/recording/visit.module";

const router = Router();

export default (app: Express): void => {
  router.use("/api/visits", VisitRoutes);
  app.use(router);
};
