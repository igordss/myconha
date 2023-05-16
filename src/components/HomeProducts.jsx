import React from 'react';
import { bongs, cbd, concentrados, extracoes, flores, tabacaria } from '../data/data';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/homeProducts.css'

function HomeProducts() {
  const promoProducts = [...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter((product) => product.promocao === true);
  const bestSellingProducts = [...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter((product) => product.muitoVendido === true);
  const newProducts = [...bongs, ...cbd, ...concentrados, ...extracoes, ...flores, ...tabacaria].filter((product) => product.lancamento === true);

  const getRandomProducts = (products) =>
    products.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div>
      <section>
        <h2>Promoções</h2>
        <div className="product-cards-container">
          {getRandomProducts(promoProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/promocoes">Ver todos os produtos em promoção</Link>
      </section>

      <section>
        <h2>Mais Vendidos</h2>
        <div className="product-cards-container">
          {getRandomProducts(bestSellingProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/mais-vendidos">Ver todos os produtos mais vendidos</Link>
      </section>

      <section>
        <h2>Lançamentos</h2>
        <div className="product-cards-container">
          {getRandomProducts(newProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/lancamentos">Ver todos os lançamentos</Link>
      </section>
    </div>
  );
}

export default HomeProducts;
