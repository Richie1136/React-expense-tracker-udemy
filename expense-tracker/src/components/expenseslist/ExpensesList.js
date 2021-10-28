import React from 'react'
import ExpenseItem from '../expenseitem/ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ expense }) => {

  if (expense.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }


  return <ul className='expenses-list'>
    {expense.map((item) => {
      return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
    })}
  </ul>
}

export default ExpensesList