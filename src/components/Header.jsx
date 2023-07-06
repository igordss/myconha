import React  from "react";
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };


  return (
    <header>
      <nav>
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img className="logo-header" src="https://static.vecteezy.com/system/resources/previews/010/933/949/original/marijuana-weed-leaf-pot-icon-cannabis-symbol-modern-simple-flat-illustration-for-web-site-or-mobile-app-free-vector.jpg" alt="logo" />
            </Link>
          </div>
          <div className="menu-container">
            <ul className="links-header">
              <li className={isActive('/products/flores')}>
                <Link to="/products/flores">Flores</Link>
              </li>
              <li className={isActive('/products/extracoes')}>
                <Link to="/products/extracoes">Extrações</Link>
              </li>
              <li className={isActive('/products/concentrados')}>
                <Link to="/products/concentrados">Concentrados</Link>
              </li>
              <li className={isActive('/products/cbd')}>
                <Link to="/products/cbd">CBD</Link>
              </li>
              <li className={isActive('/products/bongs')}>
                <Link to="/products/bongs">Bongs</Link>
              </li>
              <li className={isActive('/products/tabacaria')}>
                <Link to="/products/tabacaria">Tabacaria</Link>
              </li>
            </ul>
            <div className="header-right">
              <div className="search-bar">
                <SearchBar />
              </div>
              <ul className="nav__menu">
                <li className="cart-link">
                  <Link to="/cart">
                    <FaShoppingCart />
                    <span>Ir para Carrinho</span>
                  </Link>
                </li>
                <li className="login-link">
                  <Link to="/login">
                    <FaUser />
                    <span>Fazer Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
