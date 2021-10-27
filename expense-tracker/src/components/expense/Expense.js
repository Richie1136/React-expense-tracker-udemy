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
        <ExpenseItem
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        />
        <ExpenseItem
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        />
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        />
        <ExpenseItem
          title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
        />
        <ExpenseItem
          title={expense[4].title}
          amount={expense[4].amount}
          date={expense[4].date}
        />
      </Card>
    </div>
  )
}
export default Expense
