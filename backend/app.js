const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

// const path = require("path");
const dotenv = require('dotenv')
dotenv.config()

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

//routing logic here -> 
app.use(express.json());

app.use(cors());

//connecting to mongoDB 
const mongoUrl = process.env.MONGODB_URL;
// console.log(typeof(mongoUrl))
// mongoose.connect('mongodb+srv://admin:v6YFgS6fVZDjkR46@cluster0.hwcxot6.mongodb.net/tasktracker');
mongoose.connect(mongoUrl);


//Routes 
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);

//if defined then on that port else on 5000 port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
