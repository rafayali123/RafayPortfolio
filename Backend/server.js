const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();  

connectDB();  

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/contact", require("./routes/Routes"));

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
