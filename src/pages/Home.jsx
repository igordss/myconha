import React, { useState } from 'react';
import Header from '../components/Header';
import AgeConfirmationModal from '../components/AgeConfirmationModal';

function Home() {
  const [isAgeConfirmationOpen, setIsAgeConfirmationOpen] = useState(true);

  const handleConfirmAge = () => {
    setIsAgeConfirmationOpen(false);
  };

  const handleDenyAge = () => {
    window.location.href = 'https://www.youtube.com/watch?v=xUC_sUmVALY';
  };

  return (
    <>
      <Header />
      <AgeConfirmationModal
        isOpen={isAgeConfirmationOpen}
        onRequestClose={handleDenyAge}
        onConfirm={handleConfirmAge}
      />
      <div className="container">
        <h1>Bem-vindo ao MyConha!</h1>
        <p>Aqui você encontra os melhores produtos canábicos do mercado.</p>
      </div>
    </>
  );
}

export default Home;
