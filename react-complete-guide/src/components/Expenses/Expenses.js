import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const expenseItem = (item) => {
    return item.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
  };

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expnesesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expnesesContent = expenseItem(filteredExpenses);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expnesesContent}
      </Card>
    </div>
  );
}

export default Expenses;
