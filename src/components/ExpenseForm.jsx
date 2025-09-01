import { useEffect, useState } from "react";

const ExpenseForm = ({ addExpense, editItem }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setAmount(editItem.amount);
    } else {
      setTitle("");
      setAmount("");
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(title, amount);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="expense-form">
      <h2>{editItem ? "Edit Transaction" : "Add Transaction"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Name:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">
          {editItem ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
