import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
const Welcome = () => {
  return <Fragment> <h1>The Welcome Page</h1>
    <Link to="/welcome/new-user">New User</Link>
    <Outlet/>
  </Fragment>
};

export default Welcome;