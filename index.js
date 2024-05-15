import express from "express";
import 'dotenv/config';

import api from "./src/routes/api.js"
import webpage from "./src/routes/webpage.js"

const app = express();

app.use('/api', api)
app.use('/', webpage)

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})