import React from 'react'
import './Date.css'

const Date = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  const day = date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div className='date'>
      <div className='date__month'>{month}</div>
      <div className='date__year'>{year}</div>
      <div className='date__day'>{day}</div>
    </div>
  )
}

export default Date
