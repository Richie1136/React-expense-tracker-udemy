import React from 'react'
import './Chart.css'
import ChartBar from '../chartbar/ChartBar'

const Chart = ({ dataPoints }) => {

  return (
    <div className='chart'>
      {dataPoints.map((data) => {
        return <ChartBar key={data.label} data={data} maxValue={null} label={data.label} />
      })}
    </div>
  )
}

export default Chart
