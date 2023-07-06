import React, { useState } from 'react';
import Header from '../components/Header';
import "../styles/createAccountPage.css"

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Realizar validação dos campos
    // ...

    // Armazenar a conta criada no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Simular sucesso de criação da conta
    alert('Conta criada com sucesso');
    // Redirecionar para a página de login
    window.location.href = '/login';
  };

  return (
    <div>
      <Header />
      <div className='create-account-page'>
        <h1>Create Account</h1>
        <form onSubmit={handleCreateAccount}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
