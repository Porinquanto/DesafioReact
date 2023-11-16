// src/components/TelaLista.js
import React from 'react';
import TabelaPacientes from './TabelaPacientes';

// Componente para a tela de lista
const TelaLista = ({ pacientes, onRemover }) => {
  return (
    <div>
      <h2>Tela de Lista</h2>
      {/* Componente de tabela para exibir a lista de pacientes */}
      <TabelaPacientes pacientes={pacientes} onRemover={onRemover} />
    </div>
  );
};

export default TelaLista;
