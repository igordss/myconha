import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { bongs, cbd, concentrados, extracoes, flores, tabacaria } from '../data/data';
import Header from '../components/Header';

const SearchResults = () => {
  const searchTerm = useSelector((state) => state.search);

  const filteredProducts = [
    ...bongs,
    ...cbd,
    ...concentrados,
    ...extracoes,
    ...flores,
    ...tabacaria,
  ].filter((product) => {
    const { nome, marca, tags, descricao } = product;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      nome.toLowerCase().includes(lowerCaseSearchTerm) ||
      marca.toLowerCase().includes(lowerCaseSearchTerm) ||
      (tags && tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))) || // Adicione a verificação para tags existentes
      descricao.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div>
      <Header />
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
