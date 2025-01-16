// import express, { urlencoded } from 'express'
// import cors from 'cors'
// // import cokkieParser from 'cookie-parser'
// import testRouter from './routes/test.routes.js'
// // const express = require("express");
// const connectwithdb = require("./config/database.js"); 
// require("dotenv").config();
// // const cors = require('cors');


// // const app = express();
// const PORT = process.env.PORT || 9000;

// app.use(express.json());
// // app.use(
// //   cors({
// //     origin: ["http://127.0.0.1:5500","http://localhost:5500"], 
// //     methods: ["GET", "POST", "PUT", "DELETE"], 
// //     credentials: true, 
// //   })
// // );

// app.options("*", cors());



// const productRoutes = require("./routes/sellerroute");
// app.use("/api/v1", productRoutes);

// connectwithdb();

// app.listen(PORT, () => {
//   console.log(`App is started at port no ${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send('<h1>This is my homepage</h1>');
// });

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({ limit: "16kb" }))
// app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))


// app.use('/api/v1', testRouter);



// export { app };

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import testRouter from './routes/test.routes.js';
import productRoutes from './routes/sellerroute.js';
import connectwithdb from './db/database.js';

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 9000;

// Database connection
connectwithdb();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

// Routes
app.use('/api/v1', testRouter);
app.use('/api/v1', productRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('<h1>This is my homepage</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
});

export { app };

// Start server
if (require.main === module) { // Ensure the server runs only when directly invoked
    app.listen(PORT, () => {
        console.log(`App is started at port no ${PORT}`);
    });
}
