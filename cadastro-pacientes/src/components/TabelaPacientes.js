// src/components/TabelaPacientes.js
import React from 'react';
import '../App.css';


const TabelaPacientes = ({ pacientes, onRemover, onEditar }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Sexo</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.idade}</td>
              <td>{paciente.sexo}</td>
              <td>{paciente.status}</td>
              <td>
                <button className="button-editar" onClick={() => onEditar(paciente)}>
                  Editar
                </button>
                <button className="button-remover" onClick={() => onRemover(paciente)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaPacientes;
