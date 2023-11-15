// src/components/Paciente.js
import React from 'react';

const Paciente = ({ paciente, onRemover }) => {
  return (
    <tr>
      <td>{paciente.nome}</td>
      <td>{paciente.idade}</td>
      <td>
        <button onClick={() => onRemover(paciente)}>Remover</button>
      </td>
    </tr>
  );
};

export default Paciente;
