// src/components/FormularioCadastro.js
import React, { useState } from 'react';

// Componente para o formulário de cadastro de pacientes
const FormularioCadastro = ({ onCadastro }) => {
  // Estados locais para armazenar dados do formulário
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Chamar a função de cadastro passando os dados do novo paciente
    onCadastro({ nome, idade });
    // Limpar os campos do formulário
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
