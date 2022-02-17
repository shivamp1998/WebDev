import React from 'react';
import {useState} from 'react';
import UserForm from '../userForm/userform';
import UserList from '../userList/userList';
const UserView = () => {
    const [userArray,setUserArray] = useState([{
        name: 'shivam',
        age: 12
    }]);
    let newArray = [];
    const createUser = (data) => {
       newArray = data;
    //    console.log(newArray)
       console.log(newArray[1].name)
    }
    return (<div>
        <UserForm addUser={createUser}/>
        {
            newArray.map(data => {
                <UserList name={data.name} age={data.age} />
            })
        }
        {/* <UserList name={newArray[0].name}/> */}
    </div>);
}
export default UserView;