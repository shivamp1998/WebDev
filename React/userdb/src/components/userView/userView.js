import React from 'react';
import {useState} from 'react';
import UserForm from '../userForm/userform';
import UserList from '../userList/userList';
const UserView = () => {
    const [userList,addUserList] = useState([]);
    const createUser = (uname,uage) => {
        addUserList(prevList => {
            return [...prevList,{name:uname, age:uage}]
        })
    }
    return (<div>
        <UserForm addUser={createUser}/>
        <UserList UserList = {userList}/>
    </div>);
}
export default UserView;