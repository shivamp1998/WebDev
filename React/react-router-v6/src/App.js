import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to='/welcome'/>}/>
          <Route path="/welcome/" element={<Welcome/>} >
            <Route path="/welcome/new-user" element={<h1> Welcome new User </h1>}/>
          </Route>
          <Route path="/products" element={<Products/>} />  
          <Route path="/products/:productId" element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
