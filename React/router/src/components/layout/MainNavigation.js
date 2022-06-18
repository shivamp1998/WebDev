import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <header className={classes.header}>
    <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>Home</li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;