import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { setAgeModalConfirmed } from '../actions';
import { createPortal } from 'react-dom';
import '../styles/ageModal.css';

const AgeConfirmationModal = ({ isOpen, onRequestClose, onConfirm, ageConfirmed }) => {
  const handleConfirm = () => {
    onConfirm();
    setAgeModalConfirmed();
  }

  const setAgeModalConfirmed = () => {
    localStorage.setItem('ageConfirmed', true);
  }

  const isAgeConfirmed = () => {
    const ageConfirmedInStorage = localStorage.getItem('ageConfirmed');
    return ageConfirmed || ageConfirmedInStorage;
  }

  return (
    <>{!isAgeConfirmed() && isOpen &&
      createPortal(
        <Modal
          isOpen={true}
          onRequestClose={onRequestClose}
          contentLabel="Age Confirmation Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
          appElement={document.getElementById('root')}
        >
          <img className='logo' src="https://res.cloudinary.com/teepublic/image/private/s--IpZ2LJFb--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1586967557/production/designs/9140252_0.jpg" alt="logo" />
          <div className='modal-text'>
            <p>Sejam muito bem-vindos ao meu projeto mais ousado e, digamos, polêmico! Aqui vocês poderão conferir como seria um site de venda de maconha se ela fosse legalizada no Brasil, o que vai demorar bastante. Mas calma, já aviso que esse site é apenas um projeto de demonstração, então não se animem demais.</p>
            <br /> <p>Ah, e já que estamos falando de legalização, quero deixar claro que esse projeto não tem nenhum intuito comercial, tá? Aqui não vendemos nada, nem apoiamos esse tipo de coisa. A intenção é apenas educar sobre drogas e reduzir danos, tudo respaldado pelo julgamento da ADPF 187.</p>
            <br /> <p>Este projeto é totalmente autoral, utilizando somente imagens de terceiros, desenvolvido por mim, Igor Sousa, sem ter sido copiado de qualquer vídeo ou curso. Está sendo desenvolvido para colocar em prática todo meu conhecimento em programação front-end e, futuramente, pretendo complementá-lo com o back-end, construindo o site por completo. E eu estou sempre atualizando o projeto, adicionando novas funcionalidades e deixando tudo mais realista.</p>
            <br /> <p>Enfim, espero que vocês curtam esse projeto tanto quanto eu estou curtindo desenvolvê-lo. Está sendo um desafio e tanto, mas estou muito feliz com o que isso tem se tornado.</p>
            <br /><p>MANDA JOB</p>
          </div>
          <h1 className='question'>Você tem 18 anos ou mais?</h1>
          <div className="modal-buttons">
            <button onClick={onRequestClose}>Não</button>
            <button onClick={handleConfirm}>Sim</button>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ageConfirmed: state.ageConfirmed,
  };
};

const mapDispatchToProps = {
  setAgeModalConfirmed,
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeConfirmationModal);
