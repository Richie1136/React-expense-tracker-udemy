import React from 'react'
import './Chart.css'
import ChartBar from '../chartbar/ChartBar'

const Chart = ({ dataPoints }) => {
  const dataValues = dataPoints.map((data) => data.data)
  const totalmax = Math.max(...dataValues)

  return (
    <div className='chart'>
      {dataPoints.map((data) => {
        return <ChartBar key={data.label} data={data.data} maxValue={totalmax} label={data.label} />
      })}
    </div>
  )
}

export default Chart
