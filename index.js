import express from "express";

import api from "./src/routes/api.js"

const app = express();

app.use('/api', api)
  
app.listen(3000)