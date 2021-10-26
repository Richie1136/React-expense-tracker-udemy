import React from 'react'
import './ExpenseItem.css'
import Date from '../date/Date'
import Card from '../card/Card'

const ExpenseItem = ({ date, title, amount }) => {

  return (
    <Card className='expense-item'>
      <Date date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
