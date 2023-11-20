// Importando React, useState e useEffect do React
import React, { useState, useEffect } from 'react';
import '../App.css'; // Importando estilos do arquivo App.css

// Definindo o componente para a tela de cadastro de pacientes
const TelaCadastro = ({ onCadastro, pacienteEmEdicao, modoEdicao }) => {
  // Estados locais para armazenar dados do formulário
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [status, setStatus] = useState('');
  const [enviado, setEnviado] = useState(false); // Novo estado para rastrear se o formulário foi enviado


  // Efeito para preencher campos ao editar paciente
  useEffect(() => {
    if (modoEdicao && pacienteEmEdicao) {
      setNome(pacienteEmEdicao.nome);
      setIdade(pacienteEmEdicao.idade);
      setSexo(pacienteEmEdicao.sexo);
      setStatus(pacienteEmEdicao.status);
    }
  }, [modoEdicao, pacienteEmEdicao]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos (adapte conforme necessário)
    if (!nome || !idade || !sexo || !status) {
      alert('Preencha todos os campos antes de cadastrar.');
      return;
    }

    // Criando um novo objeto paciente com os dados do formulário
    const novoPaciente = {
      nome,
      idade,
      sexo,
      status,
    };

    // Adicionando a propriedade 'id' se estiver em modo de edição
    if (modoEdicao && pacienteEmEdicao) {
      novoPaciente.id = pacienteEmEdicao.id;
    }

    // Chamando a função de cadastro passando os dados do novo paciente
    onCadastro(novoPaciente);

    // Limpar os campos do formulário e marcar como enviado
    setNome('');
    setIdade('');
    setSexo('M'); // Define o sexo como padrão 'Masculino'
    setStatus('ativo'); // Define o status como padrão 'Ativo'
    setEnviado(true);
  };

  const alternarStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'ativo' ? 'inativo' : 'ativo'));
  };

  // Reseta o estado 'enviado' para false após 5 segundos
  setTimeout(() => {
    setEnviado(false);
  }, 5000);

  // Estrutura do retorno do componente
  return (
    <div className="container">
      {/* Título dinâmico com base no modo de edição */}
      <h1>{modoEdicao ? 'Editar Paciente' : 'Cadastro de Paciente'}</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o nome */}
        <label className="form-label">
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-input" />
        </label>
        <br />
        {/* Campo de entrada para a idade */}
        <label className="form-label">
          Idade:
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} className="form-input" />
        </label>
        <br />
        {/* Radio para selecionar o sexo */}
        <label className="form-label">
          Sexo:
          <div>
            <label>
              <input
                type="radio"
                value="M"
                checked={sexo === 'M'}
                onChange={() => setSexo('M')}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                value="F"
                checked={sexo === 'F'}
                onChange={() => setSexo('F')}
              />
              Feminino
            </label>
          </div>
        </label>
        <br />
        {/* Toggle para selecionar o status */}
        
        <label className="form-label">
          Status:
          <div>
            <label>
              <input
                type="radio"
                value="ativo"
                checked={status === 'ativo'}
                onChange={() => setStatus('ativo')}
              />
              Ativo
            </label>
            <label>
              <input
                type="radio"
                value="inativo"
                checked={status === 'inativo'}
                onChange={() => setStatus('inativo')}
              />
              Inativo
            </label>
          </div>
        </label>
        <br />
        {/* Botão para enviar o formulário */}
        <button type="submit" className="button">
          {modoEdicao ? 'Salvar Alteração' : 'Cadastrar'}
        </button>
      </form>
      {enviado && (
        <div style={{ color: 'green', marginTop: '10px' }}>Formulário enviado com sucesso!</div>
      )}
    </div>
  );
};

// Exportando o componente como padrão
export default TelaCadastro;