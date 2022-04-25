import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import  Classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return <Fragment>
        <header className={Classes.header}>  
            <h1 > React Meals </h1>
            <HeaderCartButton onClick={props.onCartShow}/>
        </header>
        <div className={Classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
}

export default Header;