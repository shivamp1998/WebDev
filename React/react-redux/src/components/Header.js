import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
