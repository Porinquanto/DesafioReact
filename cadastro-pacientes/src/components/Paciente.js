// src/components/Paciente.js
import React from 'react';

// Componente para representar um paciente na tabela
const Paciente = ({ paciente, onRemover }) => {
  return (
    <tr>
      <td>{paciente.nome}</td>
      <td>{paciente.idade}</td>
      <td>
        {/* Botão para remover o paciente */}
        <button onClick={() => onRemover(paciente)}>Remover</button>
      </td>
    </tr>
  );
};

export default Paciente;
