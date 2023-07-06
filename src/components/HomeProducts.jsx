import React from 'react';
import { bongs, cbd, concentrados, extracoes, flores, tabacaria } from '../data/data';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/homeProducts.css';

function HomeProducts() {
  const promoProducts = getRandomProducts([...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter(
    (product) => product.promocao === true
  ));

  const bestSellingProducts = getRandomProducts([...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter(
    (product) => product.muitoVendido === true
  ));

  const newProducts = getRandomProducts([...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter(
    (product) => product.lancamento === true
  ));

  function getRandomProducts(products) {
    const shuffled = products.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }

  return (
    <div className="home-products">
      <section className="product-section" id="promocoes">
        <h2>Promoções</h2>
        <div className="product-grid">
          {promoProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="product-card"/>
          ))}
        </div>
        <Link to="/promocoes">Ver todos os produtos em promoção</Link>
      </section>

      <section className="product-section" id="mais-vendidos">
        <h2>Mais Vendidos</h2>
        <div className="product-grid">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="product-card"/>
          ))}
        </div>
        <Link to="/mais-vendidos">Ver todos os produtos mais vendidos</Link>
      </section>

      <section className="product-section" id="lancamentos">
        <h2>Lançamentos</h2>
        <div className="product-grid">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="product-card" />
          ))}
        </div>
        <Link to="/lancamentos">Ver todos os lançamentos</Link>
      </section>
    </div>
  );
}

export default HomeProducts;
