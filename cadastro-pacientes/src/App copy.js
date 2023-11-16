// src/App.js
import React, { useState, useEffect } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import TabelaPacientes from './components/TabelaPacientes';

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Recuperar dados do localStorage ao carregar a aplicação
    const dadosSalvos = JSON.parse(localStorage.getItem('pacientes'));
    if (dadosSalvos) {
      setPacientes(dadosSalvos);
    }
  }, []);

  const handleCadastro = (novoPaciente) => {
    setPacientes([...pacientes, novoPaciente]);
  };

  const handleRemover = (pacienteRemovido) => {
    const novosPacientes = pacientes.filter((paciente) => paciente !== pacienteRemovido);
    setPacientes(novosPacientes);
  };

  useEffect(() => {
    // Atualizar localStorage sempre que pacientes mudarem
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div>
      <h1>Cadastro de Pacientes</h1>
      <FormularioCadastro onCadastro={handleCadastro} />
      <TabelaPacientes pacientes={pacientes} onRemover={handleRemover} />
    </div>
  );
};

export default App;
