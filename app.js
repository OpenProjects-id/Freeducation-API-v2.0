require('./db/mongoose');
const express = require('express');
const cors = require('cors');
const crowdRoute = require('./routers/crowdfundings');
const userRoute = require('./routers/user');

const app = express();

app.use(express.json());
app.use(cors());
app.use([crowdRoute, userRoute]);

app.listen(process.env.PORT, () => console.log('Running...'));
