const ExpenseItem = ({ item, deleteExpense, editExpense }) => {
  const { id, title, amount } = item;
  const expenseClass = amount < 0 ? "expense-negative" : "expense-positive";

  return (
    <div className={`expense-item ${expenseClass}`}>
      <span className="title">{title}</span>
      <span className="amount">${amount}</span>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => editExpense(item)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteExpense(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
