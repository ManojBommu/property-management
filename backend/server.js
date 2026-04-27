const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json()); // 🔥 VERY IMPORTANT

mongoose.connect("mongodb://127.0.0.1:27017/propertyDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/complaint", complaintRoutes);

app.listen(5000, ()=>console.log("Server running on port 5000"));