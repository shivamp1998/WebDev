import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Products from './pages/products';
import Welcome from './pages/welcome';
function App() {
  return (
    <Fragment>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path='/products'>
        <Products/>
      </Route>
    </Fragment>
  );
}

export default App;
