import React, { useState } from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = ({ onChangeFilter }) => {

  const yearChange = (e) => {
    onChangeFilter(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChange}>
          <option type='number' value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

