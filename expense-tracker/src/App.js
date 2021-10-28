import Expense from "./components/expense/Expense";
import NewExpense from "./components/newexpense/NewExpense";
import { useState } from 'react'

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Monitor',
    amount: 250,
    date: new Date(2021, 10, 15),
  },
]

function App({ title, amount, date }) {

  const [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses])
    console.log("In App")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expense expense={expenses} />
    </div>
  );
}

export default App;
