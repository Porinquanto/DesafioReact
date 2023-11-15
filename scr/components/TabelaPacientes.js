// src/components/TabelaPacientes.js
import React from 'react';
import Paciente from './Paciente';

const TabelaPacientes = ({ pacientes, onRemover }) => {
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
          <Paciente key={paciente.nome} paciente={paciente} onRemover={onRemover} />
        ))}
      </tbody>
    </table>
  );
};

export default TabelaPacientes;
