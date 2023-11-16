// src/App.js
import React, { useState, useEffect } from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [telaAtual, setTelaAtual] = useState('cadastro');

  useEffect(() => {
    // Recuperar dados do localStorage ao carregar a aplicação
    const dadosSalvos = JSON.parse(localStorage.getItem('pacientes'));
    if (dadosSalvos) {
      setPacientes(dadosSalvos);
    }
  }, []);

  const handleCadastro = (novoPaciente) => {
    // Adicionar novo paciente à lista e atualizar o localStorage
    const novaLista = [...pacientes, novoPaciente];
    setPacientes(novaLista);
    localStorage.setItem('pacientes', JSON.stringify(novaLista));
    
    // Mudar para a tela de lista após o cadastro
    // setTelaAtual('lista');
  };

  const handleRemover = (pacienteRemovido) => {
    // Remover paciente da lista e atualizar o localStorage
    const novosPacientes = pacientes.filter((paciente) => paciente !== pacienteRemovido);
    setPacientes(novosPacientes);
    localStorage.setItem('pacientes', JSON.stringify(novosPacientes));
  };

  return (
    <div>
      {telaAtual === 'cadastro' && <TelaCadastro onCadastro={handleCadastro} />}
      {telaAtual === 'lista' && <TelaLista pacientes={pacientes} onRemover={handleRemover} />}
      <button onClick={() => setTelaAtual(telaAtual === 'cadastro' ? 'lista' : 'cadastro')}>
        {telaAtual === 'cadastro' ? 'Ir para Lista' : 'Ir para Cadastro'}
      </button>
    </div>
  );
};

export default App;
