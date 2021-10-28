import React, { useState } from 'react'
import './Expense.css'
import Card from '../card/Card'
import ExpensesFilter from '../expensesfilter/ExpensesFilter'
import ExpensesList from '../expenseslist/ExpensesList'
import ExpensesChart from '../expenseschart/ExpensesChart'

function Expense({ expense }) {
  const [year, setYear] = useState('2020')

  const filteredYear = (selectedYear) => {
    setYear(selectedYear)
  }

  const filteredExpenses = expense.filter((item) => {
    return item.date.getFullYear().toString() === year
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onChangeFilter={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expense={filteredExpenses} />
      </Card>
    </div>
  )
}
export default Expense
