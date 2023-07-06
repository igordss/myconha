import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../actions';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import "../styles/searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicialize o hook useNavigate
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(updateSearchTerm(searchTerm));
    navigate('/search'); // Redirecione para a página de resultados ao submeter a busca
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button type="submit" className="search-button" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
