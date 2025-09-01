import ExpenseItem from "./ExpenseItem";

const History = ({ transactions, deleteExpense, editExpense }) => {
  return (
    <div className="history">
      <h4>History</h4>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((txn) => (
          <ExpenseItem
            key={txn.id}
            item={txn}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        ))
      )}
    </div>
  );
};

export default History;
