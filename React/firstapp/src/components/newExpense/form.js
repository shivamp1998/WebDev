import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [ titleChange, setTitleChange] = useState('');
    const changeTitle = (event) => {
        setTitleChange(event.target.value);
        
    }
    const [ amountChange, setAmountChange] = useState('');
    const changeAmount = (event) => {
        setAmountChange(event.target.value);
    }
    const [dateChange, setDateChange] = useState('');
    const changeDate = (event) => {
        setDateChange(event.target.value);
    }
    function onFormSubmitted(event) {
        event.preventDefault();
        const expenseData = {
            title: titleChange,
            amount: amountChange,
            date: new Date(dateChange)
        }
        props.onExpenseData(expenseData);
        setTitleChange('');
        setAmountChange('');
        setDateChange('')
    }
    return <form onSubmit={onFormSubmitted}>
        <div>
        <label>Title</label>
            <input type="text" onChange={changeTitle} value={titleChange}/>
        </div>
        <div>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={changeAmount} value={amountChange}/>
        </div>
        <div>
        <label> Date </label>
            <input type="date" min="29-01-01" max="2022-12-31" onChange={changeDate} value={dateChange}/>
        </div>
        <button type="submit"> Submit </button>
    </form>
}


export default Form;