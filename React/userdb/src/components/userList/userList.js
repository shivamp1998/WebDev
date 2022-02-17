import React from 'react';
import { useState } from 'react';

const UserList = (props) => {
    return (<div>
        <ul>
            <li> {props.name} </li>
            <li> {props.age} </li>
        </ul>
    </div>)
}

export default UserList;