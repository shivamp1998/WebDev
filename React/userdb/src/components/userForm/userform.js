import React, { useState } from 'react';

const UserForm = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    
    const onAddName = (event) => {
        setEnteredName(event.target.value);
    }

    const onAddAge = (event) => {
         setEnteredAge(event.target.value);
    }
    
    const onAddUser = (event) => {
        event.preventDefault();
        props.addUser(enteredName,enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }
    
    return (<div>
        <form onSubmit={onAddUser}>
            <label> UserName </label>
            <input type="text" name="username" onInput={onAddName} value={enteredName}/>
            <label> Age(Years) </label>
            <input type="number" name="age" onInput={onAddAge} value={enteredAge}/>
            <button type="submit">Add</button>
        </form> 
    </div>)
}

export default UserForm;