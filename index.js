const express = require("express");
const connectwithdb = require("./config/database.js"); 
require("dotenv").config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5500","http://localhost:5500"], 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

app.options("*", cors());



const productRoutes = require("./routes/sellerroute");
app.use("/api/v1", productRoutes);

connectwithdb();

app.listen(PORT, () => {
  console.log(`App is started at port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send('<h1>This is my homepage</h1>');
});
