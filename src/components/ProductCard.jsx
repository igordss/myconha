import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css'

function ProductCard({ product }) {
  const { nome, marca, imagem, preco, precoPromocional, promocao } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img className="product-card__image" src={imagem} alt={nome} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{`${nome} - ${marca}`}</h3>
        <div className="product-card__prices">
          <span className="product-card__price">{`R$ ${preco.toFixed(2)}`}</span>
          {promocao && precoPromocional ? (
            <span className="product-card__promo-price">{`R$ ${precoPromocional.toFixed(
              2
            )}`}</span>
          ) : null}
        </div>
        <button className="product-card__button">Adicionar ao Carrinho</button>
        <Link className="product-card__link" to={`/produtos/${product.id}`}>Mais sobre</Link>
      </div>
    </div>
  );
}

export default ProductCard;
