import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import "../styles/loginPage.css"


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Realizar validação dos campos
    // ...

    // Verificar se os dados de login estão corretos
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      // Simular sucesso de autenticação
      localStorage.setItem('isLoggedIn', true);
      // Redirecionar para a página de perfil
      window.location.href = '/';
    } else {
      // Exibir mensagem de erro de login inválido
      alert('Login inválido');
    }
  };

  return (
    <div>
      <Header />
      <div className='login-page'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Ainda não tem uma conta? <Link to="/create-account">Crie sua conta</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
