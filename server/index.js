const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dinoRoutes = require("./routes/dinoRoutes")
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/Dino", dinoRoutes);

app.listen(8081);