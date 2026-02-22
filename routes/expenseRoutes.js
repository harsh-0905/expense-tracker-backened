const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// GET all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// ADD expense
router.post("/", async (req, res) => {
  const newExpense = new Expense(req.body);
  const savedExpense = await newExpense.save();
  res.status(201).json(savedExpense);
});

module.exports = router;