const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connetDB");
const cantactrouter = require("./Routes/Cantact");
const app = express();

connectDB();
app.use(express.json());
app.use("/cantacts", cantactrouter);
// app.get('/', (req, res) => res.send('Hello World!'))
//process.env.port variable d'environnement : npm i dotenv
app.listen(process.env.port, () =>
  console.log(`server is  listening on port ${process.env.port}!`)
);
