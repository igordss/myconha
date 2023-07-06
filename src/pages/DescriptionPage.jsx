import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { bongs, cbd, concentrados, extracoes, flores, tabacaria } from '../data/data';

const DescriptionPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const getProductById = (productId) => {
    const productLists = [bongs, cbd, concentrados, extracoes, flores, tabacaria];
    for (const productList of productLists) {
      const product = productList.find((item) => item.id === parseInt(productId));
      if (product) {
        return product;
      }
    }
    return null;
  };

  const product = getProductById(productId);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      if (product.porPeso) {
        setQuantity((prevQuantity) =>
          value < 1 ? 1 : value > 99 ? 99 : value
        );
      } else {
        setQuantity((prevQuantity) =>
          value < 1 ? 1 : value > 999 ? 999 : value
        );
      }
    }
  };

  const handleIncrement = () => {
    if (product.porPeso) {
      setQuantity((prevQuantity) =>
        prevQuantity < 99 ? prevQuantity + 1 : prevQuantity
      );
    } else {
      setQuantity((prevQuantity) =>
        prevQuantity < 999 ? prevQuantity + 1 : prevQuantity
      );
    }
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho
    // ...
  };

  const handleBuyNow = () => {
    // Lógica para comprar o produto agora
    // ...
  };

  const calculateTotalPrice = () => {
    if (product.promocao) {
      return (product.precoPromocional * quantity).toFixed(2);
    } else {
      return (product.preco * quantity).toFixed(2);
    }
  };

  const renderQuantityWarning = () => {
    if (product.porPeso && quantity > 99) {
      return (
        <div className="description-page__warning">
          Para comprar quantidades acima da permitida, entre em contato ou conheça nosso programa de afiliados.
        </div>
      );
    }
    return null;
  };

  return (
    <div className="description-page">
      <div className="description-page__image-container">
        <img
          className="description-page__image"
          src={product.imagem}
          alt={product.nome}
        />
      </div>
      <div className="description-page__content">
        <h1 className="description-page__title">
          {product.nome} - {product.marca}
        </h1>
        <div className="description-page__description">
          {product.descricao}
        </div>
        <div className="description-page__price">
          {product.promocao ? (
            <>
              <span className="description-page__price-regular">
                R$ {product.preco.toFixed(2)}
              </span>
              <span className="description-page__price-promotional">
                R$ {product.precoPromocional.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="description-page__price-regular">
              R$ {product.preco.toFixed(2)}
            </span>
          )}
        </div>
        <div className="description-page__quantity">
          <button
            className="description-page__quantity-button"
            onClick={handleDecrement}
            disabled={quantity === 1}
          >
            -
          </button>
          <input
            className="description-page__quantity-input"
            type="number"
            min="1"
            max={product.porPeso ? 99 : 999}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button
            className="description-page__quantity-button"
            onClick={handleIncrement}
            disabled={quantity === (product.porPeso ? 99 : 999)}
          >
            +
          </button>
        </div>
        <div className="description-page__buttons">
          <button
            className="description-page__button"
            onClick={handleBuyNow}
          >
            Comprar Agora
          </button>
          <button
            className="description-page__button"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </button>
        </div>
        {renderQuantityWarning()}
        <div className="description-page__total-price">
          Preço total: R$ {calculateTotalPrice()}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
