import React from 'react'
import Chart from '../chart/Chart'

const ExpensesChart = ({ expenses, data, amount, date }) => {
  const chartData = [
    { label: 'Jan', data: 0 },
    { label: 'Feb', data: 0 },
    { label: 'Mar', data: 0 },
    { label: 'Apr', data: 0 },
    { label: 'May', data: 0 },
    { label: 'Jun', data: 0 },
    { label: 'Jul', data: 0 },
    { label: 'Aug', data: 0 },
    { label: 'Sep', data: 0 },
    { label: 'Oct', data: 0 },
    { label: 'Nov', data: 0 },
    { label: 'Dec', data: 0 },
  ]

  for (let expense of expenses) {
    const expenseMonth = expense.date.getMonth()
    chartData[expenseMonth].data += expense.amount
  }
  return (
    <div>
      <Chart dataPoints={chartData} />
    </div>
  )
}

export default ExpensesChart
