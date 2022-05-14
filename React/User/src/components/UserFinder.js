import { Fragment } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import { Component } from 'react';
const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];


class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        }
    }
    searchChangeHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: prevState.filteredUsers.filter((data) => {
                    return data.name.includes(this.state.searchTerm)
                })
            })
        } 
    }
    render() {
        return <Fragment>
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </div>
        </Fragment>
    }
}


export default UserFinder;