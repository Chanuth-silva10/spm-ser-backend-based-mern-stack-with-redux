const app = require("./app");
const dotenv = require("dotenv");
require("dotenv").config();
const connectDatabase = require("./db/Database.js");

//connect db
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
