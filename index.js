const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// const person = new Person("William");
// require("./modules/path");
// require("./modules/ts.js");

require("./modules/express");
