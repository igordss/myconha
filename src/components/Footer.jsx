import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-category">
        <h3>Institucional</h3>
        <ul>
          <li><Link to="/sobre">Sobre nós</Link></li>
          <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
          <li><Link to="/politica-de-privacidade">Política de privacidade</Link></li>
          <li><Link to="/termos-de-uso">Termos de condição e uso</Link></li>
          <li><Link to="/programa-de-afiliados">Programa de afiliados</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Ajuda</h3>
        <ul>
          <li><Link to="/trocas-e-devolucoes">Trocas e devoluções</Link></li>
          <li><Link to="/entregas">Entregas</Link></li>
          <li><Link to="/cancelamentos">Cancelamentos</Link></li>
          <li><Link to="/como-comprar">Como comprar</Link></li>
          <li><Link to="/acessibilidade">Acessibilidade</Link></li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Nossas Lojas</h3>
        <ul>
          <li><Link to="/lojas-sao-luis-ma">Lojas em São Luís-MA</Link></li>
          <li><Link to="/lojas-imperatriz-ma">Lojas Imperatriz -MA</Link></li>
          <li><Link to="/lojas-fortaleza-ce">Lojas Fortaleza-CE</Link></li>
          <li><Link to="/lojas-sao-paulo-sp">Lojas São Paulo - SP</Link></li>
          <li><Link to="/lojas-rio-de-janeiro-rj">Lojas Rio de Janeiro -RJ</Link></li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Relacionamento</h3>
        <ul>
          <li><Link to="/perguntas-frequentes">Perguntas frequentes</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/tire-suas-duvidas">Tire suas dúvidas</Link></li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Redes Sociais</h3>
        <ul className="social-media-icons">
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 - Todos os direitos reservados</p>
        <p>Desenvolvido por Igor Sousa</p>
      </div>
    </footer>
  );
};

export default Footer;

