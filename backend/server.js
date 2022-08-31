const app = require("./app");
const dotenv = require("dotenv");
require("dotenv").config();
const connectDatabase = require("./db/Database.js");

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
})

//connect db
connectDatabase();
//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


// Unhandled promise rejection
process.on("unhandledRejection", (err) =>{
  console.log(`Shutting down server for ${err.message}`);
  server.close(() =>{
      process.exit(1);
  });
});