import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import Header from '../components/Header'
import "../styles/cart.css"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.total; // Atualizado para usar o item.total
    });
    return subtotal;
  };

  return (
    <div>
      <Header />
      <div className='cart-page'>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartCard
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
                price={item.price} // Adicionado o preço como prop
                total={item.total} // Adicionado o total como prop
              />
            ))}
            <h2>Subtotal: R$ {calculateSubtotal().toFixed(2)}</h2> {/* Adicionado toFixed(2) para exibir 2 casas decimais */}
            <button>Finalizar Compra</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;


