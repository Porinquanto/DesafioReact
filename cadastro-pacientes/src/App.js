// src/App.js
import React, { useState, useEffect } from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';
import './App.css';

const App = () => {
  // Estado para armazenar a lista de pacientes
  const [pacientes, setPacientes] = useState([]);
  // Estado para controlar a tela atual (cadastro ou lista)
  const [telaAtual, setTelaAtual] = useState('cadastro');

  // Recuperar dados do localStorage ao carregar a aplicação
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('pacientes'));
    if (dadosSalvos) {
      setPacientes(dadosSalvos);
    }
  }, []);

  // Função para lidar com o cadastro de um novo paciente
  const handleCadastro = (novoPaciente) => {
    const proximoId = pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1;
    const pacienteComId = { ...novoPaciente, id: proximoId };
    const novaLista = [...pacientes, pacienteComId];
  
    // Atualize o estado
    setPacientes(novaLista);
  
    // Atualize o localStorage
    localStorage.setItem('pacientes', JSON.stringify(novaLista));
  };

  // Função para lidar com a remoção de um paciente
  const handleRemover = (pacienteRemovido) => {
    // Remover paciente da lista e atualizar o localStorage
    const novosPacientes = pacientes.filter((paciente) => paciente !== pacienteRemovido);
    setPacientes(novosPacientes);
  
    // Atualize o localStorage
    localStorage.setItem('pacientes', JSON.stringify(novosPacientes));
  };

  return (
    <div>
      {/* Renderizar a tela de cadastro se a tela atual for 'cadastro' */}
      {telaAtual === 'cadastro' && <TelaCadastro onCadastro={handleCadastro} />}
      {/* Renderizar a tela de lista se a tela atual for 'lista' */}
      {telaAtual === 'lista' && <TelaLista pacientes={pacientes} onRemover={handleRemover} setPacientes={setPacientes} />}
      {/* Botão para alternar entre tela de cadastro e lista */}
      <button onClick={() => setTelaAtual(telaAtual === 'cadastro' ? 'lista' : 'cadastro')}>
        {telaAtual === 'cadastro' ? 'Ir para Lista' : 'Ir para Cadastro'}
      </button>
    </div>
  );
};

export default App;
