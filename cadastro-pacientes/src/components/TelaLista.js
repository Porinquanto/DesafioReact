// src/components/TelaLista.js
import React, { useState, useEffect } from 'react';
import TabelaPacientes from './TabelaPacientes';
import TelaCadastro from './TelaCadastro';
import Modal from './Modal';
import '../App.css';

const TelaLista = ({ pacientes, onRemover, setPacientes }) => {
  const [filtroSexo, setFiltroSexo] = useState('');
  const [ordenacao, setOrdenacao] = useState('');
  const [pacienteEmEdicao, setPacienteEmEdicao] = useState(null);

  const [pacientesExibidos, setPacientesExibidos] = useState(pacientes);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    let filteredPacientes = [...pacientes];

    // Aplicar filtro de sexo
    if (filtroSexo) {
      filteredPacientes = filteredPacientes.filter((paciente) => paciente.sexo === filtroSexo);
    }

    // Aplicar ordenação
    if (ordenacao === 'nome-asc') {
      filteredPacientes = filteredPacientes.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (ordenacao === 'nome-desc') {
      filteredPacientes = filteredPacientes.sort((a, b) => b.nome.localeCompare(a.nome));
    } else if (ordenacao === 'id-asc') {
      filteredPacientes = filteredPacientes.sort((a, b) => a.id - b.id);
    } else if (ordenacao === 'id-desc') {
      filteredPacientes = filteredPacientes.sort((a, b) => b.id - a.id);
    } else if (ordenacao === 'idade-asc') {
      filteredPacientes = filteredPacientes.sort((a, b) => a.idade - b.idade);
    } else if (ordenacao === 'idade-desc') {
      filteredPacientes = filteredPacientes.sort((a, b) => b.idade - a.idade);
    }

    setPacientesExibidos(filteredPacientes);
  }, [filtroSexo, ordenacao, pacientes]);

const handleEditar = (paciente) => {
  setPacienteEmEdicao(paciente);
  setModalAberto(true);
};

const handleSalvarEdicao = (pacienteAtualizado) => {
  const pacientesAtualizados = pacientes.map((paciente) =>
    paciente.id === pacienteEmEdicao.id ? pacienteAtualizado : paciente
  );
  setPacientes(pacientesAtualizados);
  setPacienteEmEdicao(null);
  setModalAberto(false);
  // Atualize o localStorage
  localStorage.setItem('pacientes', JSON.stringify(pacientesAtualizados));
};

const handleCancelarEdicao = () => {
  setPacienteEmEdicao(null);
  setModalAberto(false);
};

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lista de Pacientes</h1>
      <div>
        {/* Adicione os controles de filtro aqui */}
        <label className='label-filtros'>
        {/* Ordenar por ID:
          <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
            <option value="id-asc">ID (ascendente)</option>
            <option value="id-desc">ID (descendente)</option>
          </select> */}
          Ordenar por Idade:
          <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
            <option value="idade-asc">Idade (crescente)</option>
            <option value="idade-desc">Idade (decrescente)</option>
          </select>
          Filtrar por Sexo:
          <select value={filtroSexo} onChange={(e) => setFiltroSexo(e.target.value)}>
            <option value="">Todos</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          Ordenar por Nome:
          <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
            <option value="">Nenhum</option>
            <option value="nome-asc">Nome (A-Z)</option>
            <option value="nome-desc">Nome (Z-A)</option>
          </select>
          
        </label>
      </div>
      <TabelaPacientes pacientes={pacientesExibidos} onRemover={onRemover} onEditar={handleEditar} />
      {modalAberto && (
        <Modal onClose={handleCancelarEdicao}>
          <TelaCadastro
            onCadastro={handleSalvarEdicao}
            pacienteEmEdicao={pacienteEmEdicao}
            modoEdicao
            onCancel={handleCancelarEdicao}
          />
        </Modal>
      )}
    </div>
  );
};

export default TelaLista;