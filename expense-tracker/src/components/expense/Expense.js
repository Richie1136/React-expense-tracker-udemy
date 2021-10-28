import React, { useState } from 'react'
import ExpenseItem from '../expenseitem/ExpenseItem'
import './Expense.css'
import Card from '../card/Card'
import ExpensesFilter from '../expensesfilter/ExpensesFilter'

function Expense({ expense }) {
  const [year, setYear] = useState('2020')

  const filteredYear = (selectedYear) => {
    setYear(year)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onChangeFilter={filteredYear} />
        {expense.map((item) => {
          return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        })}
      </Card>
    </div>
  )
}
export default Expense
