const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Replace this with your own MongoDB connection string
const MONGO_URI = "mongodb+srv://sotistechno:9ifNpBZJb4Ciuiwv@cluster0.8ljbiiw.mongodb.net/parkhang?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Simple route
app.get("/", (req, res) => {
    res.send("MongoDB is connected!");
});

app.listen(port, () => {
    console.log(`🚀 DB running at http://localhost:${port}`);
});