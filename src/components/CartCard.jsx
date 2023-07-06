import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/index';

const CartCard = ({ product, quantity, total }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-card">
      <h2>{`${product.nome} - ${product.marca}`}</h2>
      <img src={product.imagem} alt={product.nome} />
      <h3>Preço: {product.promocao ? product.precoPromocional : product.preco}</h3>
      <p>Quantidade: {quantity}</p>
      <p>Total: R$ {total.toFixed(2)}</p>
      <button onClick={handleRemoveFromCart}>Remover do Carrinho</button>
    </div>
  );
};

export default CartCard;
