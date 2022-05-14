import { useState } from 'react';
import User from './User';
import { Component } from 'react';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
class Users extends Component {
  
  constructor () {
    super();
    this.state = {
      showUser: false
    }
  }
  toggleUsersHandler() {
    console.log('clicked')
    this.setState(prevState => {
      return {
        showUser: !prevState.showUser
      }
    })
  }
  render () {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return <div className={classes.users}>
    <button onClick={this.toggleUsersHandler.bind(this)}>
      {this.state.showUser ? 'Hide' : 'Show'} Users
    </button>
    {this.state.showUser && usersList}
  </div>
  }
}


export default Users;
