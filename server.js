const express = require("express");
// global errorhandler, that can handle the error anywhere in the system.
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 6000;

// body parser, to pass the data stream that we receive from the client on the server side.
app.use(express.json());

// this is middleware which is using, contactRoutes file in the routes folder
// contactRoutes file contains all the routes where where our site will have pages
app.use("/api/contacts", require("./routes/contactRoutes"));

// now user route, for authentication, tokens and all.
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
