import React from 'react';
const ExpenseFilter = (props) => {
    const onDropdownChange = (event) => {
        props.onFilterChange(event.target.value)
    }
    return (
        <div>
            <label >Filter By year </label>
            <select onChange={onDropdownChange}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>

            </select>
        </div>
    )
}
export default ExpenseFilter;