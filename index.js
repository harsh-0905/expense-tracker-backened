const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");

connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running 🚀");
});

app.use("/api/expenses", expenseRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on port 5000 $ {PORT}');
});