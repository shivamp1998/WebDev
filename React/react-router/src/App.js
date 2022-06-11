import { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Products from './pages/products';
import Welcome from './pages/welcome';
import MainHeaders from '../src/components/mainHeader';
import ProductDetail from './pages/productDetail';
import { Switch } from 'react-router-dom'; 
function App() {
  return (
    <Fragment>
      <MainHeaders/>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"/>
      </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path='/products' exact>
        <Products/>
      </Route>
      <Route path="/products/:id">
        <ProductDetail/>
      </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
