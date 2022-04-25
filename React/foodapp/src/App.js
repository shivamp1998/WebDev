import React, {Fragment, useState} from 'react';
import Header from './Components/Layout/header';
import Meals from './Components/Meals/meals';
import Cart from './Components/Cart/cart';
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
    console.log('clicked')
  }
  const hideCartHandler = (value) => {
    setCartIsShown(false);
  }
  return (
    <Fragment>
      { cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onCartShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
