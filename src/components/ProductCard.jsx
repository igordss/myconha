import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from '../actions/index';
import '../styles/productCard.css';

const ProductCard = ({ product, productId }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const price = product.promocao ? product.precoPromocional : product.preco;
    dispatch(addToCart(product, quantity, price));
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="product-card">
      <h2 className="product-title">{`${product.nome} - ${product.marca}`}</h2>
      <img className="product-image" src={product.imagem} alt={product.nome} />
      <h3 className="product-price">Preço: {product.promocao ? product.precoPromocional : product.preco}</h3>
      {product.porPeso ? (
        <input type="number" min={1} max={500} value={quantity} onChange={handleQuantityChange} />
      ) : (
        <input type="number" min={1} max={15} value={quantity} onChange={handleQuantityChange} />
      )}
      <button className="add-button" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      <Link to={`/in-progress`} className="see-more-button">Saber Mais</Link>
    </div>
  );
};

export default ProductCard;
