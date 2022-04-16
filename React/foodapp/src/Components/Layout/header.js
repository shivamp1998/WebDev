import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import  Classes from './header.module.css';
const Header = (props) => {
    return <Fragment>
        <header>  
            <h1 className={Classes.header}> React Meals </h1>
            <button> Cart </button>
        </header>
        <div className={Classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
}

export default Header;