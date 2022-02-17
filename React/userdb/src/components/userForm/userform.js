import React, { useState } from 'react';

const UserForm = (props) => {
    let User = {
        name: '',
        age: ''
    }
    const [userArray,setUserArray] = useState([{
        name: '',
        age: ''
    }])
    const onAddUser = (event) => {
        // console.log(User);
        event.preventDefault();

        setUserArray( userArray.concat(User));
        // console.log(userArray);
    }
    const onAddName = (event) => {
        User = {...User, name: event.target.value}
    }

    const onAddAge = (event) => {
        User =  {...User,age: event.target.value}
    }
    
    props.addUser(userArray);

     
    return (<div>
        <form onSubmit={onAddUser}>
            <label> UserName </label>
            <input type="text" name="username" onInput={onAddName}/>
            <label> Age(Years) </label>
            <input type="number" name="age" onInput={onAddAge}/>
            <button type="submit">Add</button>
        </form> 
    </div>)
}

export default UserForm;