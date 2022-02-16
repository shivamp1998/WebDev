import React from 'react';
import Form from './form';

const NewExpense = (props) => {
    const onEnteredNewData = (newData) => {
       props.onExpenseItem(newData);
    }
    return <div>
        <Form onExpenseData = {onEnteredNewData}/>
    </div>
}

export default NewExpense;