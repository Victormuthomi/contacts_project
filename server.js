const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();

connectDb();
const port = process.env.PORT || 5000;

//The middleware to parse the json body
app.use(express.json());

//The all contacts middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

//The users middleware
app.use("/api/users", require("./routes/userRoutes"));

//use the error handler middleware
app.use(errorHandler);

//listen to a specific port
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
