import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { bongs, cbd, concentrados, extracoes, flores, tabacaria } from '../data/data';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { type, page = 1 } = useParams();

  // Selecionar o array de produtos com base no tipo
  let products;
  switch (type) {
    case 'bongs':
      products = bongs;
      break;
    case 'cbd':
      products = cbd;
      break;
    case 'concentrados':
      products = concentrados;
      break;
    case 'extracoes':
      products = extracoes;
      break;
    case 'flores':
      products = flores;
      break;
    case 'tabacaria':
      products = tabacaria;
      break;
    default:
      products = [];
      break;
  }

  // Dividir os produtos em páginas
  const pageSize = 20;
  const pageCount = Math.ceil(products.length / pageSize);

  // Obter o número da página a partir dos parâmetros de rota
  const currentPage = parseInt(page, 10);

  // Calcular o índice inicial e final dos produtos da página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Obter os produtos da página atual
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
        < Header />
      <h1>Produtos - {type}</h1>

      {/* Renderizar os produtos da página atual */}
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Renderizar a navegação entre as páginas */}
      {pageCount > 1 && (
        <div>
          {currentPage > 1 && (
            <Link to={`/products/${type}/${currentPage - 1}`}>
              <FaArrowLeft />
            </Link>
          )}
          {Array.from({ length: pageCount }, (_, index) => (
            <Link key={index + 1} to={`/products/${type}/${index + 1}`}>
              {index + 1}
            </Link>
          ))}
          {currentPage < pageCount && (
            <Link to={`/products/${type}/${currentPage + 1}`}>
              <FaArrowRight />
            </Link>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
