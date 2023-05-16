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
      <div className="banner">
        <h1 className="welcome">Bem-vindo ao MyConha!</h1>
        <div className="banner-content">
          <p className="welcome-text">Aqui você encontra os melhores produtos canábicos do mercado.</p>
          <img className="logo-banner" src="https://res.cloudinary.com/teepublic/image/private/s--IpZ2LJFb--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1586967557/production/designs/9140252_0.jpg" alt="Logo MyConha" />
        </div>
      </div>
      <HomeProducts />
      <Footer />
    </>
  );
}

export default Home;
