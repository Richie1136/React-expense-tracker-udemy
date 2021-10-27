import React from 'react'
import './NewExpense.css'
import ExpenseForm from '../expenseform/ExpenseForm'

const NewExpense = ({ addExpenseHandler }) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    addExpenseHandler(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpense
