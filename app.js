const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routers");

dotenv.config();
require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(process.env.PORT, () => console.log("Running..."));
