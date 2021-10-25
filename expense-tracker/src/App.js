import ExpenseItem from "./components/expenseitem/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div className="App">
      <h2>React expense tracker</h2>
      {expenses.map((expense) => {
        const { title, amount, date } = expense
        return <ExpenseItem title={title} amount={amount} date={date} />
      })}
    </div>
  );
}

export default App;
