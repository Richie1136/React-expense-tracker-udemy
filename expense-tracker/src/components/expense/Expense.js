import React, { useState } from 'react'
import ExpenseItem from '../expenseitem/ExpenseItem'
import './Expense.css'
import Card from '../card/Card'
import ExpensesFilter from '../expensesfilter/ExpensesFilter'

function Expense({ expense }) {
  const [year, setYear] = useState('2020')

  const filteredYear = (selectedYear) => {
    setYear(selectedYear)
  }

  const filteredExpenses = expense.filter((item) => {
    return item.date.getFullYear().toString() === year
  })

  let expenseContent = <p>No expenses found</p>

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => {
      return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
    })
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onChangeFilter={filteredYear} />
        {expenseContent}
      </Card>
    </div>
  )
}
export default Expense
