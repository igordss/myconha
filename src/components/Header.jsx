import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
          <Link to="/" className="logo-link">
            <img src= "https://static.vecteezy.com/system/resources/previews/010/933/949/original/marijuana-weed-leaf-pot-icon-cannabis-symbol-modern-simple-flat-illustration-for-web-site-or-mobile-app-free-vector.jpg" alt="logo" className="logo" />
          </Link>
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <Link to="/Flowers" className="nav__menu-link">Flores</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/Extractions" className="nav__menu-link">Extrações</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/Concentrates" className="nav__menu-link">Concentrados</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/CBD" className="nav__menu-link">CBD</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/Bongs" className="nav__menu-link">Bongs</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/HeadShop" className="nav__menu-link">Tabacaria</Link>
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
              <Link to="/Cart" className="nav__menu-link">
                <FaShoppingCart className="cart-icon" />
                <span className="cart-text">Ir para Carrinho</span>
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/Login" className="nav__menu-link">
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