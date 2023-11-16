// src/components/TabelaPacientes.js
import React from 'react';
import Paciente from './Paciente';

// Componente para exibir uma tabela simples de pacientes
const TabelaPacientes = ({ pacientes, onRemover }) => {
  // Função para remover um paciente da lista e atualizar o localStorage
  const handleRemover = (pacienteRemovido) => {
    onRemover(pacienteRemovido);
    const novosPacientes = pacientes.filter((paciente) => paciente !== pacienteRemovido);
    localStorage.setItem('pacientes', JSON.stringify(novosPacientes));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map((paciente) => (
          // Renderizar o componente Paciente para cada linha
          <Paciente key={paciente.id} paciente={paciente} onRemover={handleRemover} />
        ))}
      </tbody>
    </table>
  );
};

export default TabelaPacientes;
