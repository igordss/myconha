import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
          <Link to="/" className="logo-link">
            <img src="https://static.vecteezy.com/system/resources/previews/010/933/949/original/marijuana-weed-leaf-pot-icon-cannabis-symbol-modern-simple-flat-illustration-for-web-site-or-mobile-app-free-vector.jpg" alt="logo" className="logo" />
          </Link>
          <ul className="nav__menu">
            <li className={`nav__menu-item ${isActive('/products/flores')}`}>
              <Link to="/products/flores" className="nav__menu-link">Flores</Link>
            </li>
            <li className={`nav__menu-item ${isActive('/products/extracoes')}`}>
              <Link to="/products/extracoes" className="nav__menu-link">Extrações</Link>
            </li>
            <li className={`nav__menu-item ${isActive('/products/concentrados')}`}>
              <Link to="/products/concentrados" className="nav__menu-link">Concentrados</Link>
            </li>
            <li className={`nav__menu-item ${isActive('/products/cbd')}`}>
              <Link to="/products/cbd" className="nav__menu-link">CBD</Link>
            </li>
            <li className={`nav__menu-item ${isActive('/products/bongs')}`}>
              <Link to="/products/bongs" className="nav__menu-link">Bongs</Link>
            </li>
            <li className={`nav__menu-item ${isActive('/products/tabacaria')}`}>
              <Link to="/products/tabacaria" className="nav__menu-link">Tabacaria</Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <div className="search-container">
            <input type="text" placeholder="Buscar" className="search-input" />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </div>
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <Link to="/cart" className="nav__menu-link">
                <FaShoppingCart className="cart-icon" />
                <span className="cart-text">Ir para Carrinho</span>
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/login" className="nav__menu-link">
                <FaUser className="user-icon" />
                <span className="user-text">Fazer Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
