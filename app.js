const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const crowdRoute = require("./routers/v1/crowdfundings");
const userRoute = require("./routers/v1/user");

dotenv.config();
require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use([crowdRoute, userRoute]);

app.listen(process.env.PORT, () => console.log("Running..."));
