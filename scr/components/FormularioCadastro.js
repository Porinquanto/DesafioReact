// src/components/FormularioCadastro.js
import React, { useState } from 'react';

const FormularioCadastro = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastro({ nome, idade });
    setNome('');
    setIdade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <label>
        Idade:
        <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormularioCadastro;
