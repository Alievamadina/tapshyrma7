import React from 'react'
import "./ExpensesFillter.css"
const ExpensesFillter = ({selectedYear,changeSelectedYear}) => {
  return (
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={selectedYear} onChange={changeSelectedYear}>
                <option value="All">Select All</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
  )
}

export default ExpensesFillter