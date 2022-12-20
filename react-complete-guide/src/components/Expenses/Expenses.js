import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const filterYearHandler = (year) => {
    console.log(year)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterYear = {filterYearHandler}/>
      {props.items.map(v=>{
      return(
        <ExpenseItem title={v.title} amount={v.amount} date ={v.date} />
      )
    })}
    </Card>
  );
}

export default Expenses;
