const mongoose = require("mongoose");
import { envs } from "./envs";

const url = envs.MONGODB_URL;

export const ConnectToDb = async () => {
  try {
    var db = await mongoose.connect(url);
    console.log("Connected to database at: " + db.connection.host);
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
};
