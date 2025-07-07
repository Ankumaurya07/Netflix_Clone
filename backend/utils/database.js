// backend/utils/database.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const databaseConnection = () => {
    const mongoURI = process.env.MONGO_URL;
    if (!mongoURI) {
        console.error("❌ MONGO_URL is not defined in environment variables.");
        process.exit(1);
    }

    mongoose.connect(mongoURI)
        .then(() => {
            console.log("✅ MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("❌ MongoDB connection failed:", error.message);
            process.exit(1);
        });
};

export default databaseConnection;
