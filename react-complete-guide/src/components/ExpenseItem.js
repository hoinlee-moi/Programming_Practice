import "../extra-files/Expenseltem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTtile = "Car Insurance";
  const expesnseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTtile}</h2>
        <div className="expense-item__price">${expesnseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
