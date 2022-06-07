import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
  const hidden = useSelector(state => state.ui.hidden);
  return (
    <Layout>
      {hidden && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
