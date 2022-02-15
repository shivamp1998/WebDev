import Calender from './calender';
import React, {useState} from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const newTitle = () => {
        setTitle('title Updated');
    }
    return (
        <div>
           <p> {title} </p>
           <p> {props.amount} </p>
           <Calender date={props.date}/>
           <button onClick = {newTitle }>Click</button>
        </div>
    )
}

export default ExpenseItem;