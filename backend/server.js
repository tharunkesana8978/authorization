const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");


dotenv.config();
const app = express();

app.use(express.json());

connectDB();

const adminRoutes = require("./routes/adminRoutes");
const managerRoutes = require("./routes/managerRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/manager", managerRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));