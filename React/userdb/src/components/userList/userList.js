import React from 'react';
import { useState } from 'react';

const UserList = (props) => {
    
    return (<div>
        <ul>
            {
                props.UserList.map(data => {
                    return `my name is ${data.name} and age is ${data.age}`
                })
            }
        </ul>
    </div>)
}

export default UserList;