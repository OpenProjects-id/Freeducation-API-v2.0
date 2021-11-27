const express = require('express');
const cors = require('cors');
const crowdRoute = require('./routers/crowdfundingsRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(crowdRoute);

app.listen(process.env.PORT, () => console.log('Running...'));
