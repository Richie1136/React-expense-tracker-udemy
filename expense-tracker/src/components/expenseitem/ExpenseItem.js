import React, { useState } from 'react'
import './ExpenseItem.css'
import Date from '../date/Date'
import Card from '../card/Card'

const ExpenseItem = ({ date, title, amount }) => {
  const [expensetitle, setExpensetitle] = useState(title)

  const handleClick = (e) => {
    setExpensetitle(e.target.value)
    console.log("Clicked")
  }
  return (
    <Card className='expense-item'>
      <Date date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
