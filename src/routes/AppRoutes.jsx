import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import LoginPage from '../pages/LoginPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import DescriptionPage from '../pages/DescriptionPage';
import SearchResults from '../pages/SearchResults';
import InProgressPage from '../pages/InProgressPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/products/:type" element={<ProductPage />} />
      <Route path="/products/:type/:page" element={<ProductPage />} />
      <Route path="/description/:productId" element={<DescriptionPage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/in-progress" element={<InProgressPage />} />
    </Routes>
  );
}

export default AppRoutes;
