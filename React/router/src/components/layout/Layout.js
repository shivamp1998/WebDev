import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { Fragment } from 'react';

const Layout = (props) => {
    return <Fragment>
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
    </Fragment>
}


export default Layout;