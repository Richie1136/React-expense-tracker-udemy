import React from 'react'

const Date = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  const day = date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default Date
