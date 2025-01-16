// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectwithdb = () => {
//     mongoose.connect(process.env.DATABASE_URL)
//     .then(() => {
//         console.log("DB connected successfully");
//     })
//     .catch((error) => {
//         console.log("DB facing connection issue");
//         console.log(error);
//         process.exit(1);
//     });
// };

// module.exports = connectwithdb;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectwithdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB facing connection issue");
        console.error(error);
        process.exit(1);
    }
};

export default connectwithdb;
