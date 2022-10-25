const express = require("express");
require("dotenv").config({ path: "./config.env" });
require("./db/mongoose");
const app = express();
const cors = require("cors");
const recordRouter = require("./routes/record");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(recordRouter);
// get driver connection

app.listen(port, () => {
    // perform a database connection when server starts
    console.log(`Server is running on port: ${port}`);
});
