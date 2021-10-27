import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())

  const titleChange = (e) => {
    // If your state updates depends on the previous state, use function form
    setTitle(e.target.value)
  }
  const amountChange = (e) => {
    setAmount(e.target.value)
  }

  const dateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={date} min='2019-01-01' max='2021-12-31' onChange={dateChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChange} />
        </div>
      </div>
      <div className='new_expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
