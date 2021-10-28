import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from '../expenseform/ExpenseForm'

const NewExpense = ({ addExpenseHandler }) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    addExpenseHandler(expenseData)
    setIsEditing(false)
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  let edit = <ExpenseForm onSaveExpenseData={saveExpenseData} stopEditing={stopEditing} />

  if (!isEditing) {
    edit = <button onClick={startEditing}>Add New Expense</button>
  }

  return (
    <div className='new-expense'>
      {edit}
    </div>
  )
}

export default NewExpense
