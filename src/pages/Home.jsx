import React, { useState } from 'react';
import Header from '../components/Header';
import AgeConfirmationModal from '../components/AgeConfirmationModal';
import HomeProducts from '../components/HomeProducts';
import Footer from '../components/Footer'
import "../styles/home.css"

function Home() {
  const [isAgeConfirmationOpen, setIsAgeConfirmationOpen] = useState(true);

  const handleConfirmAge = () => {
    setIsAgeConfirmationOpen(false);
  };

  const handleDenyAge = () => {
    window.location.href = 'https://youtu.be/lrD5pAPm_ng?t=19';
  };

  return (
    <>
      <Header />
      <AgeConfirmationModal
        isOpen={isAgeConfirmationOpen}
        onRequestClose={handleDenyAge}
        onConfirm={handleConfirmAge}
      />
      <div className='home-container'>
      <div className='welcome'>
        <h1>Bem-vindo(a)(e) à Myconha, a sua maconha cultivada com amor e cuidado.</h1>
        <h2>A Myconha oferece uma seleção premium de produtos canábicos para entusiastas, conhecedores e curiosos.</h2>
      </div>
      <HomeProducts />
      </div>
      <Footer />
    </>
  );
}

export default Home;
