import React from 'react'
import './NewExpense.css'
import ExpenseForm from '../expenseform/ExpenseForm'

const NewExpense = () => {
  const saveExpenseData = (ExpenseDatas) => {
    const expenseData = {
      ...ExpenseDatas,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpense
