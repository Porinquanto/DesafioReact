// src/components/TelaCadastro.js
import React, { useState } from 'react';
import FormularioCadastro from './FormularioCadastro';

// Componente para a tela de cadastro
const TelaCadastro = ({ onCadastro }) => {
  return (
    <div>
      <h2>Tela de Cadastro</h2>
      {/* Componente de formulário de cadastro */}
      <FormularioCadastro onCadastro={onCadastro} />
    </div>
  );
};

export default TelaCadastro;
