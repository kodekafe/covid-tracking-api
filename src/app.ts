import Express = require("express")

const app = Express();

app.get("/", (req: Express.Request, res: Express.Response): void => {
  res.send("Aw yeah success");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
