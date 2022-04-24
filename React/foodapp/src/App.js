import React, {Fragment} from 'react';
import Header from './Components/Layout/header';
import Meals from './Components/Meals/meals';
import Cart from './Components/Cart/cart';
function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
