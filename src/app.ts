import Express = require("express");

import { expressConfig } from "./config";
import loaders from "./loaders/index";

const app = Express();

loaders(app);

app.listen(expressConfig.port, expressConfig.host, () => {
  console.log(`Listening on ${expressConfig.host}:${expressConfig.port}`);
});
