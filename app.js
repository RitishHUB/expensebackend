const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://loguritish28_db_user:uuZviPoBo1AoxoQ0@cluster0.bi95ca8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema + Model
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Expense = mongoose.model("Expense", expenseSchema);

// POST route to add an expense
app.post("/addExpense", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all expenses
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE expense
app.delete("/deleteExpense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).send("Expense not found");
    }

    res.json(deletedExpense);
  } catch (err) {
    res.status(500).send("Error deleting expense");
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
