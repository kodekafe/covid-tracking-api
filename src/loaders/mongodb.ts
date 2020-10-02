import * as mongoose from "mongoose";
import { mongoConfig } from "../config/index";

export default (): void => {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);

  mongoose.connection.on("error", (err) => console.log(err.message));
  mongoose.connection.once("connected", () =>
    console.log(`Connected to MongoDB instance at ${mongoConfig.mongoURI}`)
  );

  mongoose.connect(mongoConfig.mongoURI);
};
