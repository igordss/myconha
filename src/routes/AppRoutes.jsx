import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Bongs from '../pages/Bongs';
import CBD from '../pages/CBD';
import Concentrates from '../pages/Concentrates';
import Cart from '../pages/Cart';
import Extractions from '../pages/Extractions';
import Flowers from '../pages/Flowers';
import HeadShop from '../pages/HeadShop';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bongs" element={<Bongs />} />
      <Route path="/CBD" element={<CBD />} />
      <Route path="/Concentrates" element={<Concentrates />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Extractions" element={<Extractions />} />
      <Route path="/Flowers" element={<Flowers />} />
      <Route path="/HeadShop" element={<HeadShop />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
