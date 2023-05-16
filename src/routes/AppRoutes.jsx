import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/products/:type" element={<ProductPage />} />
      <Route path="/products/:type/:page" element={<ProductPage />} />
    </Routes>
  );
}

export default AppRoutes;
